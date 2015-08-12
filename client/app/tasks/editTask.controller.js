define(function(require, exports, module) {
	
	var app = require('app');
	
	app.registerController('editTaskController', editTaskController);

	editTaskController.$inject = ['$location', '$stateParams', 'Auth', 'tasks'];

	function editTaskController($location, $stateParams, Auth, tasks){
		
		var vm = this;
		
		vm.user = Auth.getCurrentUser();
		
		if($stateParams.id){
			
			tasks.get({id: $stateParams.id}, function(result){
				vm.task = result;
			}, function(err){
				console.log('error', err);
			});
				
		}else{
			
			vm.task = new tasks({
				email: vm.user.email
			});
			
		}
		
		
		vm.saveTask = function(){
			
			var saveMethod = '$save';
			
			if(vm.task._id){
				saveMethod = '$update';
			}
			
			vm.task[saveMethod](function(result){
				
				$location.path('/tasks/' + vm.task._id);
				
			});
				
		}
		
		tasks.query(function(data){
			
			console.log('get success', data);
			
		}, function(err){
			
			console.log('get error', err);
			
		});

	}	
	
});