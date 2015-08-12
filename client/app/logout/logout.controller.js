define(function(require, exports, module) {
	
	var app = require('app');
	
	app.registerController('logoutController', logoutController);

	logoutController.$inject = ['$location', 'Auth'];

	function logoutController($location, Auth){
		
		var vm = this;
		
		vm.logout = function() {
	      Auth.logout();
	      $location.path('/');
	    };
		
		vm.logout();
	}	
	
});


