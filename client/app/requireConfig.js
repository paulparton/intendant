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
		'angular-couch-potato': '../bower_components/angular-couch-potato/dist/angular-couch-potato'
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
	    }			
	}
});

require([
	'app',
	'modules/appConfig/appConfig',
	'modules/appRun/appRun',
	'main/main',
	'login/login',
	'register/register',
	], function(){
	angular.bootstrap(document, ['intendant']);
});