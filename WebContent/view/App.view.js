sap.ui.jsview("view.App", {

    getControllerName: function() {
        return "view.App";
    },

    createContent: function(oController) {

        // to avoid scrollbars on desktop the root view must be set to block display
        this.setDisplayBlock(true);

        this.app = new sap.m.SplitApp();

        this.app.addMasterPage(sap.ui.jsview("Menu", "view.Menu"));

        this.app.addDetailPage(sap.ui.xmlview("Info", "view.Info"));
        this.app.addDetailPage(sap.ui.jsview("CoffeeList", "view.CoffeeList"));

        // navigate to the first page in both master and detail areas.
        // the toMaster must be called after calling the toDetail, because both of them point to the same reference in phone and 
        // the real first page that will be shown in phone is the page in master area. 
        this.app.toDetail("CoffeeList");
        this.app.toMaster("Menu");

        return new sap.m.Shell("Shell", {
            title: "",
            showLogout: false,
            app: this.app,
            homeIcon: {
                'phone': 'img/57_iPhone_Desktop_Launch.png',
                'phone@2': 'img/114_iPhone-Retina_Web_Clip.png',
                'tablet': 'img/72_iPad_Desktop_Launch.png',
                'tablet@2': 'img/144_iPad_Retina_Web_Clip.png',
                'favicon': 'img/favicon.ico',
                'precomposed': false
            }
        });
    }
});