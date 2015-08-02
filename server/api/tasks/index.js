var express = require('express');

var router = express.Router();

router.get('/', function(req, res){
	res.send('tasks index!');
});

router.get('/wig', function(req, res){
	res.send('YOUR MOMS CHEST HAIR!');
});

module.exports = router;