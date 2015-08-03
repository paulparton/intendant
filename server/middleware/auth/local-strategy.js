var LocalStrategy = require('passport-local').Strategy;

exports.setup = function (User) {
  
  
  return new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password' // this is the virtual field on the model
    },
    function(email, password, done) {
      
      console.log('attempt access: ', email, password);
      User.findOne({
        email: email.toLowerCase()
      }, function(err, user) {
        if (err) return done(err);

        if (!user) {
          console.log('local auth, user not found with email ' + email);
          return done(null, false, { message: 'This email is not registered.' });
        }
        if (!user.authenticate(password)) {
          console.log('local auth, incorrect password for email ' + email);
          return done(null, false, { message: 'This password is not correct.' });
        }
        
        console.log('authenticate this mother fucker!', user);
        
        return done(null, user);
      });
    }
  );
};