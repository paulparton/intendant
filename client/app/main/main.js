define(function(require, exports, module) {

	var app = require('app');
	
	app.config(mainModuleConfiguration);
	
	mainModuleConfiguration.$inject = ['$stateProvider', '$couchPotatoProvider'];
	
	function mainModuleConfiguration($stateProvider, $couchPotatoProvider){
		
		$stateProvider
			.state('main', {
				url: '/',
				templateUrl: 'app/main/main.view.html',
				controller: 'mainController',
				controllerAs: 'mainController',
	            resolve: {
	              dummy: $couchPotatoProvider.resolveDependencies(['main/main.controller'])
	            }			
			})
			.state('mainName', {
				url: '/mainName',
				templateUrl: 'app/main/main.view.html',
				controller: 'mainController',
				controllerAs: 'mainController',
	            resolve: {
	              dummy: $couchPotatoProvider.resolveDependencies(['main/main.controller'])
	            }			
			});			
		
	}	
	
	
});