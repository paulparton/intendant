define(function(require, exports, module) {
	
	var app = require('app'),
		authInterceptor = require('authInterceptor');

	configureApplication.$inject = ['$stateProvider', '$urlRouterProvider', '$couchPotatoProvider', '$locationProvider', '$httpProvider'];
	
	function configureApplication($stateProvider, $urlRouteProvider,  $couchPotatoProvider, $locationProvider, $httpProvider){
	
		//Default route
		$urlRouteProvider.otherwise('/');
		
		$locationProvider.html5Mode(true);
		
		$httpProvider.interceptors.push('authInterceptor');
		
		//Routes are configured in route folders

	}
	
	app.config(configureApplication);
	
	return configureApplication;
	
});
