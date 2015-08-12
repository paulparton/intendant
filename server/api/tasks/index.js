var express = require('express'),
	controller = require('./tasks.controller'),
	router = express.Router();


router.get('/', controller.index);
router.get('/:id', controller.getTask);
router.post('/', controller.newTask);
router.put('/:id', controller.updateTask);
router.delete('/:id', controller.deleteTask);


module.exports = router;
