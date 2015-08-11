define(function(require, exports, module) {
	
	var app = require('app');
	
	runApplication.$inject = ['$location', '$rootScope', '$couchPotato', 'Auth'];
	
	function runApplication($location, $rootScope, $couchPotato, Auth){
		
		app.lazy = $couchPotato;
		
	    $rootScope.$on('$stateChangeStart', function (event, next) {
			
	      Auth.isLoggedInAsync(function(loggedIn) {
			
	        $rootScope.loggedIn = loggedIn;
	
	        if (next.authenticate && !loggedIn) {
	          $location.path('/login');
	        }

	      });

	    });
	
	}
	
	app.run(runApplication);
	
	return runApplication;

});