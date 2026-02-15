import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  type PageContent = {
    title : Text;
    header : Text;
    body : Text;
    footer : Text;
  };

  let defaultHomePage : PageContent = {
    title = "Welcome to the Internet Computer";
    header = "Home Page";
    body = "This is a learning experiment site.";
    footer = "© 2024 Experiment Site";
  };

  let contentPages = Map.singleton<Text, PageContent>("home", defaultHomePage);

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
