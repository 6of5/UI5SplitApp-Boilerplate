jQuery.sap.declare("app.Component");

jQuery.sap.require("sap.ui.model.resource.ResourceModel");

sap.ui.core.UIComponent.extend("app.Component", {

    createContent: function() {

        //App View
        var oView = sap.ui.jsview("app", "view.App");

        // set i18n model
        var i18nModel = new sap.ui.model.resource.ResourceModel({
            bundleUrl: "i18n/i18n.properties"
        });
        oView.setModel(i18nModel, "i18n");

        return oView;
    }
});