sap.ui.controller("view.CoffeeList", {

    onInit: function() {
        this.getView().setModel(new sap.ui.model.json.JSONModel("model/coffee.json"));
    }
    
});