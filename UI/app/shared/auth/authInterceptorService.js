// Interceptor is a service which capture every XHR request and manipulate
// it before sending it to the back-end API or after receiving the response
// from the API
// Here we set the bearer token, and check if the response from back-end API
// contains error with code 401.
// This service needs to be registered within the angular -> eg in app.module.js
angular.module('app')
  .factory('authInterceptorService',
    ['$q', '$location', 'localStorageService',
    function($q, $location, localStorageService){
      var authInterceptor = {};

      // fired before $http sends a request to the backend
      var _request = function (config) {
        config.headers = config.headers || {};

        var authData = localStorageService.get('authorizationData');

        if (authData) {
            config.headers.Authorization = 'Bearer ' + authData.token;
        }

        return config;
      };

      // fired after a response from the backend is received
      var _responseError = function (rejection) {
        if(rejection.status === 401){
          $location.path('/login');
        }

        return $q.reject(rejection);
      };

      authInterceptor.request = _request;
      authInterceptor.responseError = _request;

      return authInterceptor;
  }]);

  // angular.module("app").config(['$httpProvider', function ($httpProvider) {
  //     $httpProvider.interceptors.push('authInterceptorService');
  // }]);
