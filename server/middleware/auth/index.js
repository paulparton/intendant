var passport = require('passport'),
		expressSession = require('express-session');

exports.init = function(userModel, app){

	app.use(passport.initialize());
	app.use(passport.session());

	passport.use(require('./local-strategy').setup(userModel));

	passport.serializeUser(function(user, done) {
	  done(null, user._id);
	});

	passport.deserializeUser(function(id, done) {
	  userModel.findById(id, function(err, user) {
	    done(err, user);
	  });
	});

};
