sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "sap/ui/model/json/JSONModel"
], function(Controller, MessageToast) {
  "use strict";

  return Controller.extend("com.myorg.myUI5App.controller.MainView", {
    
    onShowHello: function() {
      var sRecipient = this.getView().getModel().getProperty("/recipient/name");
      
      MessageToast.show(sRecipient);
    }
  });
});
