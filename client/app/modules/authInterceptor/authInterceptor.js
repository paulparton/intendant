  define(function(require, exports, module) {
      
    var app = require('app');
  
    app.factory('authInterceptor', authInterceptor);
    
    authInterceptor.$inject = ['$rootScope', '$q', '$cookieStore', '$location'];
    
    function authInterceptor($rootScope, $q, $cookieStore, $location) {
        
        return {
          // Add authorization token to headers
          request: function (config) {
              
              console.log('foo fight!!', $cookieStore.get('token'));
              
            config.headers = config.headers || {};
            if ($cookieStore.get('token')) {
              config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
            }
            return config;
          },
    
          // Intercept 401s and redirect you to login
          responseError: function(response) {
            if(response.status === 401) {
              $location.path('/login');
              // remove any stale tokens
              $cookieStore.remove('token');
              return $q.reject(response);
            }
            else {
              return $q.reject(response);
            }
          }
        };
        
      }
      
  });