define(function(require, exports, module) {
	
	var app = require('app');
	
	app.registerController('registerController', registerController);

	registerController.$inject = ['$location','Auth','$http'];

	function registerController($location, Auth, $http){
		
		var vm = this;
		
		vm.newUser = {
			username:'',
			password:'',
			email:''	
		};
		
		vm.registerUser = function(){
			
			/**
			$http.post('/api/auth/register', vm.newUser)
				.then(function(result){
					console.log('success!!', result);
				}, function(err){
					console.log('fail!!', err);
				});
 			*/

			//if(form.$valid) {
				Auth.createUser({
				  username: vm.newUser.username,
				  email: vm.newUser.email,
				  password: vm.newUser.password
				})
				.then( function() {
				  // Account created, redirect to home
				  $location.path('/');
				})
				.catch( function(err) {
				  err = err.data;
				  console.log('error: ', err);
				  //$scope.errors = {};
				
				  // Update validity of form fields that match the mongoose errors
				 // angular.forEach(err.errors, function(error, field) {
				  //  form[field].$setValidity('mongoose', false);
				  //  $scope.errors[field] = error.message;
				  //});
				});
			//}				
					
		}
		
	}	
	
});