module.exports = middlewareConfig;

var Users = require('../api/users/user.model'),
	auth = require('./auth'),
	bodyParser = require('body-parser');

function middlewareConfig(app){
	
	//Initiate passport.js middleware
	auth.init(Users);
	
	//Initiate any express middleware
	app.use( bodyParser.json() );       // to support JSON-encoded bodies
	app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	  extended: true
	})); 
		
}


