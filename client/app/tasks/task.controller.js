define(function(require, exports, module) {
	
	var app = require('app');
	
	app.registerController('taskController', taskController);

	taskController.$inject = ['$stateParams', '$location', 'tasks'];

	function taskController	($stateParams, $location, tasks){
		
		var vm = this;
		
		vm.loadTask = loadTask;
		vm.deleteTask = deleteTask;
		
		vm.loadTask();
		
		function loadTask(){
			
			tasks.get({id: $stateParams.id}, querySuccess, queryError);
			
		}
		
		function querySuccess(result){
			
			vm.task = result;
			
		}
		
		function queryError(err){
			
			$location.path('/');
			
		}
		
		
		function deleteTask(task){
			
			task.$delete(deleteSuccess, deleteError);
				
		}
				
		function deleteSuccess(){
			
			$location.path('/');
			
		}
		
		function deleteError(){
			console.log('error deleting tasks from server: ', err);
		}
		
	}	
	
});