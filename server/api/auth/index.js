var express = require('express'),
    passport = require('passport'),
    controller = require('./auth.controller'),
    router = express.Router();

    router.post(['/login/local'], passport.authenticate('local'), controller.localLoginSuccess);
    router.post('/login/facebook', passport.authenticate('facebook'), controller.facebookLoginSuccess);
      
 
  module.exports = router;  