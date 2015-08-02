var express = require('express'),
    passport = require('passport'),
    router = express.Router();


  /* Handle Login POST */
  router.post('/login', passport.authenticate('login'), function(req, res){
    
    res.send(200, req.user);    
    
  });

  /* Handle Registration POST */
  router.post('/register', passport.authenticate('signup'), function(req, res){
    
    console.log('register: ', req.user);
    
    res.send(200, req.user);
    
  });
 
  module.exports = router;  