sap.ui.define([
    'sap/ui/core/Fragment',
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel'
], function (Fragment, Controller, JSONModel) {
    "use strict";

    var PageController = Controller.extend("sap.ui.layout.sample.SimpleForm354.Page", {

        onInit: function (oEvent) {

            var oModel = new JSONModel();
            this.getView().setModel(oModel);
            this.getView().bindElement("");
        }
    })

});