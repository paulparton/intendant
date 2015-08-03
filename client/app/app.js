define([
	'angular',
	'angular-ui-router',
	'angular-couch-potato',
	'angular-animate',
	'angular-cookies',
	'angular-resource'
], function(angular, angularUiRouter, couchPotato){
	
	//Create the angular module
	var app = angular.module('intendant', [
		'ngAnimate',
		'ui.router',
		'scs.couch-potato',
		'ngCookies',
		'ngResource'
	]);
	
	//Enable couch potato for lazy loading
	couchPotato.configureApp(app);
	
	//Return the angular module
	return app;

});

