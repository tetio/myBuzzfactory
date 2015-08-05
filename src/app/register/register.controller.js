(function () {
	'use strict';

	angular
		.module('myapp')
		.controller('RegisterController', RegisterController);

	function RegisterController() {
		var vm = this;
		vm.name = "";
		vm.surname = "";
		vm.selectedSection = "Home";

		vm.sections = [
			'None',
			'Home',
			'Administration',
			'Reports'
		];
		
		vm.submit = function() {
			vm.message = "Welcome "+vm.name+" "+vm.surname+"!";
		};

	}

})(); 