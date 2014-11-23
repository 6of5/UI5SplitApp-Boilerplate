jQuery.sap.require("ui5bp.app.config");

sap.ui.jsview("ui5bp.view.CoffeeList", {

    getControllerName: function() {
        return "ui5bp.view.CoffeeList";
    },

    createContent: function(oController) {

        var oListTemplate = new sap.m.ObjectListItem({
            title: "{name}",
            icon: "sap-icon://goal",
            intro: "{description}",
            number: "{calories}",
            numberUnit: "Calories"
        });

        var oList = new sap.m.List({});
        oList.bindAggregation("items", "/Coffee", oListTemplate);

        var oBtnLaunchpad = new sap.m.Button({
            icon : "sap-icon://home",
            visible : ui5bp.app.config.LaunchpadMode,
            tooltip : "Back to Launchpad",
            press : function(ev) {
                sap.ui.getCore().getEventBus().publish("nav", "back", {id : "Launchpad"});
            }
        });

        return new sap.m.Page({
            title: "Coffee Menu",
            showNavButton: "{device>/isPhone}",
            navButtonPress: [oController.doNavBack, oController],
            content: [oList],
            headerContent: [oBtnLaunchpad],
            footer: new sap.m.Bar({})
        });
    }

});