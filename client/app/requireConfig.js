require.config({
	baseUrl: 'app',
	map: {
		//maps
	},
	paths: {
		//ALiases and paths for modules
		'angular':'../bower_components/angular/angular',
		'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router',
		'angular-animate': '../bower_components/angular-animate/angular-animate',
		'angular-couch-potato': '../bower_components/angular-couch-potato/dist/angular-couch-potato',
		'angular-cookies': '../bower_components/angular-cookies/angular-cookies',
		'angular-resource': '../bower_components/angular-resource/angular-resource',
		'authInterceptor': 'modules/authInterceptor/authInterceptor',
		'userFactory': 'modules/auth/user.factory',
		'authFactory': 'modules/auth/AUTH.factory',	
	},
	shim: {
		//Modules and their dependent modules
	    'angular': {
	      exports   : 'angular'
	    },
	    'angular-ui-router': {
	      deps      : ['angular']
	    },
	    'angular-animate': {
	      deps      : ['angular']
	    },
	    'angular-cookies': {
	      deps      : ['angular']
	    },					
	    'angular-resource': {
	      deps      : ['angular']
	    }			
	}
});

require([
	'app',
	'userFactory',
	'authFactory',
	'authInterceptor',
	'modules/appConfig/appConfig',
	'modules/appRun/appRun',
	'main/main',
	'login/login',
	'register/register',
	'tasks/tasks',
	'modules/navbar/navbar.controller'
	], function(){
	angular.bootstrap(document, ['intendant']);
});