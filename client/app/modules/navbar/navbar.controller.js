define(function(require, exports, module) { 
	
	var app = require('app');
	
	app.controller('navbar', navBarController);
	
	navBarController.$inject = ['Auth', '$timeout', '$location'];
	
	function navBarController(Auth, $timeout, $location){
		
		var vm = this;
		
		//$timeout(function(){
			
		vm.isAuth = Auth.isLoggedIn;
		vm.getCurrentUser = Auth.getCurrentUser;

		//}, 100);
		
		console.log(Auth.getCurrentUser());
		vm.test = "testsies";
		
		//Auth.isLoggedInAsync(function(status){
			//vm.isAuth = status;
		//});
		
		vm.logout = function() {
	      Auth.logout();
	      $location.path('/');
	    };		
		
	}
	
});