import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Iter "mo:core/Iter";

module {
  public type UserProfile = {
    name : Text;
  };

  type PageContent = {
    title : Text;
    header : Text;
    body : Text;
    footer : Text;
  };

  type OldActor = {
    userProfiles : Map.Map<Principal, UserProfile>;
    contentPages : Map.Map<Text, PageContent>;
    defaultHomePage : PageContent;
  };

  type NewActor = {
    userProfiles : Map.Map<Principal, UserProfile>;
    contentPages : Map.Map<Text, PageContent>;
    defaultHomePage : PageContent;
    defaultContactPage : PageContent;
  };

  public func run(old : OldActor) : NewActor {
    let defaultContactPage : PageContent = {
      title = "Contact Us";
      header = "Address: 123 Main St., Educational City";
      body = "Phone: (123) 456-7890\nEmail: info@mastermindstudycircle.com";
      footer = "We are here to help you achieve your educational goals.";
    };

    let contentPages = Map.fromIter<Text, PageContent>(
      [(("contact", defaultContactPage))].values().concat(
        old.contentPages.entries(),
      )
    );
    {
      old with
      contentPages;
      defaultContactPage;
    };
  };
};
