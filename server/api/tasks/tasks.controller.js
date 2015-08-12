var tasks = require('./tasks.model'),
	_ = require('lodash');

module.exports = {
	index: listAll,
	getTask: getTask,
	newTask: newTask,
	updateTask: updateTask,
	deleteTask: deleteTask
}

function listAll(req, res){
	
	tasks.find({},function(err, data){
		
		if(err){
			return res.send(err);
		}
		
		res.send(200, data);
		
	});
	
}

function getTask (req, res){
		
	tasks.findById(req.params.id, function(err, data){
		
		if(err){
			return res.send(err);
		}
		
		if(!data){
			return res.send(404);  
		}
		
		return res.send(200, data);
		
	});
}

function newTask (req, res){
	
	tasks.create(req.body, function(err, data){
		
		if(err){
			return res.send(err);
		}
		
		res.send(201, data);
		
	});
	
	
}

function updateTask(req, res){
	
	if(req.body._id){
		delete req.body._id;
	}
	
	tasks.findById(req.params.id, function(err, data){
		
		if(err){
			return res.send(err);
		}

		if(!data){
			res.send(404);  
		}
				
		var updated = _.extend(data, req.body);
		
		updated.save(function(err){
			
			if(err){
				return res.send(err);
			}
			
			return res.send(200, data);
			
		});
		
	});
		
}

function deleteTask(req, res){
	
	console.log('delete this thing: ', req.params._id);
	
	tasks.findById(req.params.id, function(err, data){
		
		if(err){
			return res.send(err);
		}

		if(!data){
			res.send(200, data);  
		}
		
		data.remove(function(err){
			
			if(err){
				return res.send(err);
			}
			
			return res.send(204);
			
		});
		
	});
	
}