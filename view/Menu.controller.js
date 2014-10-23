jQuery.sap.require("sap.ui.model.json.JSONModel");

sap.ui.controller("ui5bp.view.Menu", {

    onInit: function() {
        this.getView().setModel(new sap.ui.model.json.JSONModel("model/menu.json"));
        this.bus = sap.ui.getCore().getEventBus();
    },

    doNavOnSelect: function(event) {
        if (sap.ui.Device.system.phone) {
            event.getParameter("listItem").setSelected(false);
        }
        this.bus.publish("nav", "to", {
            id: event.getParameter('listItem').getCustomData()[0].getValue()
        });
    }
});