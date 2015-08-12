define(function(require, exports, module) {
	
	var app = require('app');
	
	app.service('tasks', tasksService);
	
	tasksService.$inject = ['$resource'];
	
	function tasksService($resource){
		
		return $resource('api/tasks/:id', {id: '@_id'}, {
			update: {
				method: 'PUT'
			}
		});
		
	}
	
});