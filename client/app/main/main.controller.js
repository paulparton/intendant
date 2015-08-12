
define(function(require, exports, module) {
	
	var app = require('app');
		
	app.registerController('mainController', mainController);

	mainController.$inject = ['$location','Auth'];

	function mainController($location, Auth){
		
		var vm = this;
		
		if(Auth.isLoggedIn()){
			console.log('user is logged in!');
			$location.path('/tasks')
		}else{
			console.log('You shal not paaa. You shall not paa.papapa.. you shall not paaaaaaaa....');
			$location.path('/login')
		}

		
	}	

});