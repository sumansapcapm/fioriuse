sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("com.infy.sample.parentapp.controller.Parent", {
			onInit: function () {

            },
            onCollaborationOverLay: function (oEvent) {
				
						// Create component and component container
						if (this._compCollab) {
							// Start collaborate 
							this._compCollab.collaborate();
						} else {
							// Create sub component (async)
							this.getOwnerComponent().createComponent({
									usage: "compReuse",
									async: true
								})
								.then($.proxy(this.onCollComponentCreatedApi, this).bind(this))
								.catch(function (oError) {
									jQuery.sap.log.error(oError);
								});
						}
                    } ,
            onCollComponentCreatedApi: function (oComp) {
				jQuery.sap.log.info("COMPONENT CREATED");

				// Keep ref to created component
				this._compCollab = oComp;

				// Attach events Validation/Close
				this._compCollab.attachCloseDialog($.proxy(this.onCollCloseDialog, this));
				this._compCollab.attachDataValidated($.proxy(this.onCollDataValidated, this));
				this._compCollab.attachMessagesExist($.proxy(this.onCollMessagesExist, this));

				// Create component container
				var oContainer = new sap.ui.core.ComponentContainer({
					component: this._compCollab,
					propagateModel: true
				});

				// Add component container to Page in fragment
				Fragment.byId("collab", "collabPage").addContent(oContainer);
				// Set component in fragment component container
				//Fragment.byId("collab", "compCollab").setComponent(this._compCollab);

				// Start collaborate
				this._compCollab.collaborate();

			},
				
        
		});
	});
