module.exports = middlewareConfig;

var Users = require('../api/users/user.model'),
		auth = require('./auth'),
		bodyParser = require('body-parser'),
		expressSession = require('express-session');

function middlewareConfig(app){

	//Initiate passport.js middleware
	auth.init(Users, app);

	//Initiate any express middleware
	app.use(expressSession({secret: 'mySecretKey'}));
	app.use( bodyParser.json() );       // to support JSON-encoded bodies
	app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	  extended: true
	}));

}
