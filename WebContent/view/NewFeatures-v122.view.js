jQuery.sap.require("sap.ui.layout.form.SimpleForm");
jQuery.sap.require("sap.ui.unified.Calendar");
jQuery.sap.require("sap.ui.unified.DateRange");

sap.ui.jsview("ui5bp.view.NewFeatures-v122", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf view.NewFeatues-v122
	 */
	getControllerName : function() {
		return "ui5bp.view.NewFeatures-v122";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf view.NewFeatues-v122
	 */
	createContent : function(oController) {
		var that = this;

		var oForm = new sap.ui.layout.form.SimpleForm({
			minWidth        : 1024,
			maxContainerCols: 2,
			editable        : true,
			layout          : "ResponsiveGridLayout",
			//title           : "Date Controls",
			labelSpanL : 4,
			labelSpanM : 4,
			emptySpanL : 1,
			emptySpanM : 1,
			columnsL   : 1,
			columnsM   : 1		
		});
		
		var oDatePicker = new sap.m.DatePicker({
			value : {
				path : "input>/date1",
				type : new sap.ui.model.type.Date({})
			}
		});
		var oDatePickerLabel = new sap.m.Label({
			text : "NEW DatePicker Control",
			labelFor : oDatePicker
		});
		oForm.addContent(oDatePickerLabel);
		oForm.addContent(oDatePicker);	
		
		var oDateTime = new sap.m.DateTimeInput({
			value : {
				path : "input>/date2",
				type : new sap.ui.model.type.Date({})
			}
		});
		var oDateTimeLabel = new sap.m.Label({
			text : "DateTime Control",
			labelFor : oDateTime
		});
		oForm.addContent(oDateTimeLabel);
		oForm.addContent(oDateTime);
		
		var oCalendar = new sap.ui.unified.Calendar({
			intervalSelection: true,
			selectedDates : new sap.ui.unified.DateRange({
				startDate : "{input>/date1}",
				endDate   : "{input>/date2}"
			})
		});
		var oCalendarLabel = new sap.m.Label({
			text : "NEW Calendar Control",
			labelFor : oCalendar
		});	
		oForm.addContent(oCalendarLabel);		
		oForm.addContent(oCalendar);	
		
		
		var oForm2 = new sap.ui.layout.form.SimpleForm({
			minWidth        : 1024,
			maxContainerCols: 2,
			editable        : true,
			layout          : "ResponsiveGridLayout",
			//title           : "Other Controls",
			labelSpanL : 4,
			labelSpanM : 4,
			emptySpanL : 1,
			emptySpanM : 1,
			columnsL   : 1,
			columnsM   : 1		
		});
		
		var oComboBox = new sap.m.ComboBox({
			placeholder: "Choose your drink",
			items: {
				path: "coffee>/Coffee", template: new sap.ui.core.Item({
					key: "{coffee>name}",
					text: "{coffee>name}"
				})
			},			
			selectedKey : "{input>/myDrink}"
		});
		var oComboBoxLabel = new sap.m.Label({
			text : "NEW ComboBox Control",
			labelFor : oComboBox
		});
		oForm2.addContent(oComboBoxLabel);
		oForm2.addContent(oComboBox);	
		
		var oMultiComboBox = new sap.m.MultiComboBox({
			items: {
				path: "coffee>/Coffee", template: new sap.ui.core.Item({
					key: "{coffee>name}",
					text: "{coffee>name}"
				})
			}
		});
		var oMultiComboBoxLabel = new sap.m.Label({
			text : "NEW MulitComboBox Control",
			labelFor : oMultiComboBox
		});
		oForm2.addContent(oMultiComboBoxLabel);
		oForm2.addContent(oMultiComboBox);		
		
		var oMultiInput = new sap.m.MultiInput();
		oMultiInput.addValidator(function(args){
			var text = args.text;
			return new sap.m.Token({key: text, text: text});
		});		
		var oMultiInputLabel = new sap.m.Label({
			text : "NEW MulitInput Control",
			labelFor : oMultiInput
		});

		oForm2.addContent(oMultiInputLabel);
		oForm2.addContent(oMultiInput);		
		
		var oToggleButton = new sap.m.ToggleButton({
			text : "Press Me",
			press : function(evt){
				if (evt.getSource().getPressed()){
					oToggleButton.setText("Unpress Me");
				} else {
					oToggleButton.setText("Press Me");					
				}
			}
		});	
		var oCompactModeButton = new sap.m.ToggleButton({
			text : "Compact Mode",
			press : function(evt){
				if (evt.getSource().getPressed()){
					oCompactModeButton.setText("Switch to Normal Mode");
					that.addStyleClass("sapUiSizeCompact");
				} else {
					oCompactModeButton.setText("Compact Mode");
					that.removeStyleClass("sapUiSizeCompact");
				}
			}
		});			
		var oToggleButtonLabel = new sap.m.Label({
			text : "NEW ToggleButton Control",
			labelFor : oToggleButton
		});
		oForm2.addContent(oToggleButtonLabel);
		oForm2.addContent(oToggleButton);				
		oForm2.addContent(oCompactModeButton);
		
        var oIconTabBar = new sap.m.IconTabBar({
            items: [
                new sap.m.IconTabFilter({
                    text: "Date Input Controls",
                    content : [oForm]
                }),
                new sap.m.IconTabFilter({
                    text: "Other Input Controls",
                    content : [oForm2]
                })
            ]
        });        
        
        var oBtnLaunchpad = new sap.m.Button({
            icon : "sap-icon://home",
            visible : ui5bp.app.config.LaunchpadMode,
            tooltip : "Back to Launchpad",
            press : function(ev) {
                sap.ui.getCore().getEventBus().publish("nav", "backToPage", {id : "Launchpad"});
            }
        });        
        
		return new sap.m.Page({
			title : "New Features v1.22 - Demo",
            showNavButton: "{device>/isPhone}",
            navButtonPress: [oController.doNavBack, oController],			
			content : [ oIconTabBar ],
            headerContent: [oBtnLaunchpad],			
            footer: new sap.m.Bar({})			
		});
	}

});