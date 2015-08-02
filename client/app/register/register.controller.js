define(function(require, exports, module) {
	
	var app = require('app');
	
	app.registerController('registerController', registerController);

	registerController.$inject = ['$http'];

	function registerController($http){
		
		var vm = this;
		
		vm.newUser = {
			username:'',
			password:'',
			email:''	
		};
		
		vm.registerUser = function(){
			
			$http.post('/api/auth/register', vm.newUser)
				.then(function(result){
					console.log('success!!', result);
				}, function(err){
					console.log('fail!!', err);
				});
			
		}
		
	}	
	
});