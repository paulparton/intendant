define(function(require, exports, module) {
	
	var app = require('app');
	
	app.config(loginConfig);
	
	loginConfig.$inject = ['$stateProvider', '$couchPotatoProvider'];
	
	function loginConfig($stateProvider, $couchPotatoProvider){
		
		$stateProvider
			.state('login', {
				url: '/login',
				templateUrl: 'app/login/login.view.html',
				controller: 'loginController',
				controllerAs: 'loginController',
	            resolve: {
	              dummy: $couchPotatoProvider.resolveDependencies(['login/login.controller'])
	            }			
			});
		
	}
	
});