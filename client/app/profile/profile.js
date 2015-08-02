define(function(require, exports, module) {
	
	var app = require('app');
	
	app.config(profileConfig);
	
	profileConfig.$inject = ['$stateProvider', '$couchPotatoProvider'];
	
	function profileConfig($stateProvider, $couchPotatoProvider){
		
		$stateProvider
			.state('profile', {
				url: '/profile',
				templateUrl: 'app/profile/profile.view.html',
				controller: 'profileController',
				controllerAs: 'profileController',
	            resolve: {
	              dummy: $couchPotatoProvider.resolveDependencies(['profile/profile.controller'])
	            }			
			});
		
	}
	
});