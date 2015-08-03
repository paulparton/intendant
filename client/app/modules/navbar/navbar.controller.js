define(function(require, exports, module) { 
	
	var app = require('app');
	
	app.controller('navbar', navBarController);
	
	navBarController.$inject = ['Auth', '$timeout'];
	
	function navBarController(Auth, $timeout){
		
		var vm = this;
		
		$timeout(function(){
			
			vm.isAuth = Auth.isLoggedIn();
				
		}, 100);
		
		vm.test = "testsies";
		
		//Auth.isLoggedInAsync(function(status){
			//vm.isAuth = status;
		//});
		
		
		
	}
	
});