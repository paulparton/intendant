define(function(require, exports, module) {
	
	var app = require('app');
	
	app.registerController('tasksController', tasksController);

	tasksController.$inject = ['$location', 'Auth'];

	function tasksController($location, Auth){
		
		var vm = this;
		
		vm.logout = function() {
	      Auth.logout();
	      $location.path('/login');
	    };
	}	
	
});