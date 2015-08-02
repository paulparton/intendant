define(function(require, exports, module) {
	
	var app = require('app');
	
	app.config(tasksConfig);
	
	tasksConfig.$inject = ['$stateProvider', '$couchPotatoProvider'];
	
	function tasksConfig($stateProvider, $couchPotatoProvider){
		
		$stateProvider
			.state('tasks', {
				url: '/tasks',
				templateUrl: 'app/tasks/tasks.view.html',
				controller: 'tasksController',
				controllerAs: 'tasksController',
	            resolve: {
	              dummy: $couchPotatoProvider.resolveDependencies(['tasks/tasks.controller'])
	            }			
			});
		
	}
	
});