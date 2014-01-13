jQuery.sap.require("sap.ui.model.json.JSONModel");

sap.ui.controller("view.Menu", {

    onInit: function() {
        this.getView().setModel(new sap.ui.model.json.JSONModel("model/menu.json"));
    },

    doNavOnSelect: function(event) {
        var bus = sap.ui.getCore().getEventBus();
        bus.publish("nav", "to", {
            id: event.getParameter('listItem').getCustomData()[0].getValue()
        });
    }
});