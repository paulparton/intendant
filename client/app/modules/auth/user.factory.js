define(function(require, exports, module) {
    	
	'use strict';
    
    var app = require('app');
    
	app.factory('User', userFactory);
	
	userFactory.$inject = ['$resource'];
	
	function userFactory($resource) {
    return $resource('/api/users/:id/:controller', {
      id: '@_id'
    },
    {
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      }
	  });
  }

});