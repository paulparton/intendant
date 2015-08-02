define([
	'app'
], function(app){
	
	configureApplication.$inject = ['$stateProvider', '$urlRouterProvider', '$couchPotatoProvider', '$locationProvider'];
	
	function configureApplication($stateProvider, $urlRouteProvider,  $couchPotatoProvider, $locationProvider){
	
		//Default route
		$urlRouteProvider.otherwise('/');
		
		$locationProvider.html5Mode(true);
		
		//Routes are configured in route folders

	}
	
	app.config(configureApplication);
	
	return configureApplication;
	
});
