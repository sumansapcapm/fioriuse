/*global QUnit*/

sap.ui.define([
	"cominfy.sample./parentapp/controller/Parent.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Parent Controller");

	QUnit.test("I should test the Parent controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
