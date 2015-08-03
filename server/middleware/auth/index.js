var passport = require('passport'),
	User = require('../../api/users/user.model');

exports.init = function(userModel){

	var local = require('./local-strategy').setup(userModel);
		//facebook = require('./facebook');
	
	passport.serializeUser(function(user, done) {
		console.log('serialize this motherfucker! ', user);
	  done(null, user._id);
	});
	 
	passport.deserializeUser(function(id, done) {
		console.log('de-serialize this motherfucker! ', id);
	  User.findById(id, function(err, user) {
	    done(err, user);
	  });
	});


	passport.use(local);
			
};