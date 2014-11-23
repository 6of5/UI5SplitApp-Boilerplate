sap.ui.jsview("ui5bp.view.Menu", {

    getControllerName: function() {
        return "ui5bp.view.Menu";
    },

    createContent: function(oController) {

        var oListTemplate = new sap.m.StandardListItem({
            title: "{title}",
            icon: "{icon}",
            description: "{description}",
            type: sap.m.ListType.Navigation,
            customData: new sap.ui.core.CustomData({
                key: "targetPage",
                value: "{targetPage}"
            })
        });

        var oList = new sap.m.List({
            selectionChange: [oController.doNavOnSelect, oController],
            mode: sap.m.ListMode.SingleSelectMaster
        });
        oList.bindAggregation("items", "/Menu", oListTemplate);


        return new sap.m.Page({
            customHeader: new sap.m.Bar({
                contentLeft: [new sap.m.Image("ui5Logo", {
                    src: "img/57_iPhone_Desktop_Launch.png",
                    width: "35px",
                    height: "35px"
                })],
                contentMiddle: [new sap.m.Text({
                    text: "{i18n>WELCOME_TITLE}"
                })]
            }),
            content: [oList],
            footer: new sap.m.Bar({
                contentMiddle: [new sap.m.Link("myproLink", {
                    text: "v0.8.0",
                    href: "http://blog.mypro.de/tag/ui5boilerplate/"
                })]
            })
        });
    }

});