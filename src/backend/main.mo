import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Migration "migration";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

// Specify the data migration function in with-clause
(with migration = Migration.run)
actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  public type UserProfile = {
    name : Text;
  };

  type PageContent = {
    title : Text;
    header : Text;
    body : Text;
    footer : Text;
  };

  let defaultHomePage : PageContent = {
    title = "Welcome to Mastermind Study Circle";
    header = "Your Gateway to Knowledge";
    body = "Empowering minds through collaborative learning and educational vision. Join us to explore, innovate, and achieve academic excellence.";
    footer = "© 2024 Mastermind Study Circle";
  };

  let defaultContactPage : PageContent = {
    title = "Contact Us";
    header = "Address: 123 Main St., Educational City";
    body = "Phone: (123) 456-7890\nEmail: info@mastermindstudycircle.com";
    footer = "We are here to help you achieve your educational goals.";
  };

  let contentPages = Map.fromIter<Text, PageContent>(
    [("home", defaultHomePage), ("contact", defaultContactPage)].values(),
  );
  let userProfiles = Map.empty<Principal, UserProfile>();

  // User Profile Functions
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Page Management Functions
  public shared ({ caller }) func updatePage(pageId : Text, content : PageContent) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can update pages");
    };
    contentPages.add(pageId, content);
  };

  public shared ({ caller }) func removePage(pageId : Text) : async Bool {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can remove pages");
    };
    let existed = contentPages.containsKey(pageId);
    contentPages.remove(pageId);
    existed;
  };

  public query ({ caller }) func getAllPages() : async [(Text, PageContent)] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can access all pages");
    };
    contentPages.toArray();
  };

  public query func getPage(pageId : Text) : async ?PageContent {
    contentPages.get(pageId);
  };

  public query func getPages(pageIds : [Text]) : async [(Text, PageContent)] {
    let resultPages = contentPages.filter(
      func(id, _) {
        pageIds.find(func(requestedId) { requestedId == id }) != null;
      }
    );
    resultPages.toArray();
  };

  public query func getHomePage() : async PageContent {
    switch (contentPages.get("home")) {
      case (?page) { page };
      case null { defaultHomePage };
    };
  };
};
