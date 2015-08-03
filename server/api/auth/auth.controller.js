var auth = require('../../components/auth.service');

exports.localLoginSuccess = function(req, res){
	
	console.log('log this cunt in ', req.user);
		
    if (!req.user) return res.status(404).json({message: 'Something went wrong, please try again.'});

    var token = auth.signToken(req.user._id, req.user.role);
    res.json({token: token});
	 
}

exports.facebookLoginSuccess = function(req, res){
	res.send(200, req.user); 
}
