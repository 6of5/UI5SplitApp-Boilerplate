sap.ui.localResources("view");
sap.ui.localResources("model");
sap.ui.localResources("app");

jQuery.sap.require("app.Component");

//create app Component and place at dom element with id = root
new sap.ui.core.ComponentContainer({
    name: "app"
}).placeAt('root');