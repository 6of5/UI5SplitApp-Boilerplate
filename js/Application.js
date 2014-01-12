jQuery.sap.declare("base.Application");

jQuery.sap.require("sap.ui.app.Application");
jQuery.sap.require("sap.ui.model.resource.ResourceModel");

sap.ui.app.Application.extend("Application", {
	init : function () {
		
		// set i18n model
		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl : "i18n/i18n.properties"
		});
		sap.ui.getCore().setModel(i18nModel, "i18n");
	},
	
	main : function () {
		
		// create app view and put to html root element
		var root = this.getRoot();
		sap.ui.jsview("app", "view.App").placeAt(root);	
	}	
});