define(function(require, exports, module) {
	
	var app = require('app');
	
	app.registerController('loginController', loginController);

	loginController.$inject = ['$http'];

	function loginController($http){
		
		var vm = this;
		
		vm.user = {
			username:'',
			password:''
		};
		
		vm.loginUser = function(){
			
			$http.post('/api/auth/login', vm.user)
				.then(function(result){
					console.log('success!!', result);
				}, function(err){
					console.log('fail!!', err);
				});
			
		}
				
	}	
	
});