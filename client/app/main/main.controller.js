
define(function(require, exports, module) {
	
	var app = require('app');
		
	app.registerController('mainController', mainController);

	mainController.$inject = ['$timeout', '$scope'];

	function mainController($timeout, $scope){
		
		var vm = this;
	
		vm.test = "test";
		
		vm.items = [
			"first",
			"second",
			"third"
		];
		
	}	

});