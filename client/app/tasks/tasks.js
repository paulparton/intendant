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
				authenticate: true,
	            resolve: {
	              dummy: $couchPotatoProvider.resolveDependencies(['tasks/tasks.controller'])
	            }			
			})
			.state('editTask', {
				url: '/tasks/edit/:id',
				templateUrl: 'app/tasks/editTask.view.html',
				controller: 'editTaskController',
				controllerAs: 'editTaskController',
				authenticate: true,
	            resolve: {
	              dummy: $couchPotatoProvider.resolveDependencies(['tasks/editTask.controller'])
	            }			
			})			
			.state('newTask', {
				url: '/tasks/new',
				templateUrl: 'app/tasks/editTask.view.html',
				controller: 'editTaskController',
				controllerAs: 'editTaskController',
				authenticate: true,
	            resolve: {
	              dummy: $couchPotatoProvider.resolveDependencies(['tasks/editTask.Controller'])
	            }			
			})				
			.state('task', {
				url: '/tasks/:id',
				templateUrl: 'app/tasks/task.view.html',
				controller: 'taskController',
				controllerAs: 'taskController',
				authenticate: true,
	            resolve: {
	              dummy: $couchPotatoProvider.resolveDependencies(['tasks/task.controller'])
	            }			
			})					
	}
	
});