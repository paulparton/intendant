var express = require('express'),
	app = express(),
	mongoose = require('mongoose'),
  middleware,
	routes;

//Configure middleware
middleware = require('./middleware')(app);

//Configure express routes
routes = require('./routes')(app);

//Configure database
mongoose.connect('mongodb://localhost/intendant');

//Start the server
app.listen(1337);
