(function(theWindow) {
  var Swiftype = theWindow.Swiftype || (theWindow.Swiftype = {});
  Swiftype.root_url = Swiftype.root_url || "//search-api.swiftype.com";
  Swiftype.key = "Eb8BCTfmGBXENyszLUhs";
  Swiftype.inputElement = "#search-io";
  Swiftype.attachElement = "#search-io";
  Swiftype.renderStyle = "overlay";
  Swiftype.searchPerPage = 10;
  Swiftype.autocompleteResultLimit = 10;

  // Unset optional configuration that may have been set by the old embed or attempted customization
  Swiftype.resultPageURL = undefined;
  Swiftype.resultContainingElement = null;
  Swiftype.disableAutocomplete = false;




  var executeCommand = theWindow[theWindow["SwiftypeObject"]];

  executeCommand("loadStyleSheet", "//s.swiftypecdn.com/assets/swiftype_nocode-c6575cb4100b9d4d45485339a43d57fa.css");
  executeCommand("loadScript", "//s.swiftypecdn.com/assets/swiftype_nocode-aaedb6772bb53c7dcdd30b0bbc989a10.js");

})(window);
