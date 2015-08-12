define(function(require, exports, module) {
	
	var app = require('app');
	
	app.config(logoutConfig);
	
	logoutConfig.$inject = ['$stateProvider', '$couchPotatoProvider'];
	
	function logoutConfig($stateProvider, $couchPotatoProvider){
		
		$stateProvider
			.state('logout', {
				url: '/logout',
				templateUrl: 'app/logout/logout.view.html',
				controller: 'logoutController',
				controllerAs: 'logoutController',
	            resolve: {
	              dummy: $couchPotatoProvider.resolveDependencies(['logout/logout.controller'])
	            }			
			});
		
	}
	
});