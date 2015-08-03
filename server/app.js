var express = require('express'),
	app = express(),
	mongoose = require('mongoose'),
	
	passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  User = require('./api/users/user.model'),
	expressSession = require('express-session'),
	bcrypt = require('bcrypt-nodejs'),
  
  middleware,
  
	//Configure express routes
	routes;

//Configure express	
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());

var bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

middleware = require('./middleware')(app);
routes = require('./routes')(app);


//Configure database
mongoose.connect('mongodb://localhost/intendant');

//Start the server
app.listen(1337);