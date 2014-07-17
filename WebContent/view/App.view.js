sap.ui.jsview("view.App", {

    getControllerName: function() {
        return "view.App";
    },

    createContent: function(oController) {

        // set i18n model
        var oI18nModel = new sap.ui.model.resource.ResourceModel({
            bundleUrl: "i18n/i18n.properties"
        });
        sap.ui.getCore().setModel(oI18nModel, "i18n");
        this.setModel(oI18nModel, "i18n");

        // set device model
        var oDeviceModel = new sap.ui.model.json.JSONModel({
            isTouch: sap.ui.Device.support.touch,
            isNoTouch: !sap.ui.Device.support.touch,
            isPhone: sap.ui.Device.system.phone,
            isNoPhone: !sap.ui.Device.system.phone,
            listMode: (sap.ui.Device.system.phone) ? "None" : "SingleSelectMaster",
            listItemType: (sap.ui.Device.system.phone) ? "Active" : "Inactive"
        });
        oDeviceModel.setDefaultBindingMode("OneWay");
        sap.ui.getCore().setModel(oDeviceModel, "device");
        this.setModel(oDeviceModel, "device");

        // to avoid scrollbars on desktop the root view must be set to block display
        this.setDisplayBlock(true);

        this.app = new sap.m.SplitApp({
            afterDetailNavigate: function() {
                if (sap.ui.Device.system.phone) {
                    this.hideMaster();
                }
            },
            homeIcon: {
                'phone': 'img/57_iPhone_Desktop_Launch.png',
                'phone@2': 'img/114_iPhone-Retina_Web_Clip.png',
                'tablet': 'img/72_iPad_Desktop_Launch.png',
                'tablet@2': 'img/144_iPad_Retina_Web_Clip.png',
                'favicon': 'img/favicon.ico',
                'precomposed': false
            }
        });

        this.app.addMasterPage(sap.ui.jsview("Menu", "view.Menu"));

        this.app.addDetailPage(sap.ui.xmlview("Info", "view.Info"));
        this.app.addDetailPage(sap.ui.jsview("CoffeeList", "view.CoffeeList"));
        this.app.addDetailPage(sap.ui.jsview("NewFeatures-v122", "view.NewFeatures-v122"));
        
        // navigate to the first page in both master and detail areas.
        // the toMaster must be called after calling the toDetail, because both of them point to the same reference in phone and 
        // the real first page that will be shown in phone is the page in master area. 
        this.app.toDetail("CoffeeList");
        this.app.toMaster("Menu");

        return this.app;
    }
});