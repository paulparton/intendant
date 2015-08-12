define(function(require, exports, module) {
	
	var app = require('app');
	
	app.registerController('tasksController', tasksController);

	tasksController.$inject = ['$location', 'Auth', 'tasks'];

	function tasksController($location, Auth, tasks){
		
		var vm = this;
		
		vm.loadTasks = loadTasks;

		
		vm.loadTasks();
		

		
		function loadTasks(){
			
			tasks.query(querySuccess, queryError);
			
		}
		
		function querySuccess(result){
			
			vm.tasks = result;
			
		}
		
		function queryError(err){
			
			console.log('error loading tasks from server: ', err);
				
		}

		
	}	
	
});