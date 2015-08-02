'use strict';
var path = require('path'),
	express = require('express');

module.exports = createRoutes;

function createRoutes(app){
	
	//Application routes
	app.use('/api/tasks', require('./api/tasks'));
	app.use('/api/auth', require('./api/auth'));
	
	
	//Configure all other routes to show client application
	app.use("/styles", express.static(__dirname + "/../app/js"));
	app.use("/bower_components", express.static(__dirname + "/../app/img"));
	app.use("/css", express.static(__dirname + "/../app/css"));
	app.use("/partials", express.static(__dirname + "/../app/partials"));

	app.use(express.static(path.resolve('client')));
	
	//Enable HTML5 mode	
	app.route('/*').get(function(req, res){
			res.sendFile(path.resolve('client/index.html'));
	});
	
}