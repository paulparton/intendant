define(function(require, exports, module) {
	
	var app = require('app');
	
	app.config(loginConfig);
	
	loginConfig.$inject = ['$stateProvider', '$couchPotatoProvider'];
	
	function loginConfig($stateProvider, $couchPotatoProvider){
		
		$stateProvider
			.state('register', {
				url: '/register',
				templateUrl: 'app/register/register.view.html',
				controller: 'registerController',
				controllerAs: 'registerController',
	            resolve: {
	              dummy: $couchPotatoProvider.resolveDependencies(['register/register.controller'])
	            }			
			});
		
	}
	
});