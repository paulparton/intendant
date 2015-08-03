define(function(require, exports, module) {
	
	var app = require('app');
	
	app.registerController('loginController', loginController);

	loginController.$inject = ['$location', 'Auth'];

	function loginController($location, Auth){
		
		var vm = this;
		
		vm.user = {
			email:'',
			password:''
		};
		
		vm.loginUser = function(){
			
			/**
			$http.post('/api/auth/login', vm.user)
				.then(function(result){
					console.log('success!!', result);
				}, function(err){
					console.log('fail!!', err);
				});
			 */	
			//if(form.$valid) {
				Auth.login({
				  email: vm.user.email,
				  password: vm.user.password,
				  username: vm.user.email
				})
				.then( function() {
				  // Logged in, redirect to home
				  $location.path('/tasks');
				})
				.catch( function(err) {
				  vm.errorMessage = err;
				});
			//}				
			
		}
				
	}	
	
});


