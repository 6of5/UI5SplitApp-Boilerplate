sap.ui.localResources("view");
sap.ui.localResources("model");

jQuery.sap.registerModulePath('base', 'js');

jQuery.sap.require("base.Application");

//launch application
var oApp = new Application({
    root: "root"
});