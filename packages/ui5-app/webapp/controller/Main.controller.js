sap.ui.define([
	"test/Sample/controller/BaseController"
], function (Controller) {
	"use strict";

	return Controller.extend("test.Sample.controller.Main", {
		onInit() {
			let text = "Hello World";
			console.error(`Peter says: ${text} `);
		},

		navFwd(oEvent) {
			this.getOwnerComponent().getRouter().navTo("RouteOther");
		}
	});
});
