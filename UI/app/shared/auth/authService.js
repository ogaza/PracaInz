// This service is responsible for signing up new users,
// log-in/log-out registered users, and store the generated token
// in local storage so this token can be sent with each request
// to access secure resources on the back-end API

angular.module('app')
.factory('authService', ['$http', '$q', '$log', 'localStorageService',

  function ($http, $q, $log, localStorageService) {
    var authServiceFactory = {}

    authServiceFactory.test = function () {
      $log.log('test message')
      $log.log('test second message')
    };

    var serviceBase = 'http://localhost:10001/';

    var _authentication = {
      isAuth: false,
      user: {}
    };

    var _saveRegistration = function (registration) {
      _logOut();

      return $http.post(serviceBase + 'api/account/register', registration)
        .then(function (response) {
          return response;
      });
    }

    var _login = function (loginData) {
      var data = 'grant_type=password&username='
                 + loginData.userName + '&password=' + loginData.password;

      var deferred = $q.defer();

      $http.post(serviceBase + 'token', data, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(
          function (response) {
            localStorageService.set(
              'authorizationData',
              {
                token: response.data.access_token, userName: loginData.userName
              });
            _authentication.isAuth = true;
            _authentication.user.name = loginData.userName;
            deferred.resolve(response);
          },
          function (err) {
            _logOut();
            deferred.reject(err);
        });
      return deferred.promise;
    }

    var _logOut = function () {
      localStorageService.remove('authorizationData');

      _authentication.isAuth = false;
      _authentication.user = {};
    }

    var _fillAuthData = function () {
      var authData = localStorageService.get('authorizationData')
      if (authData) {
        _authentication.isAuth = true;
        _authentication.user.name = authData.userName;
      }
    }

    authServiceFactory.saveRegistration = _saveRegistration;
    authServiceFactory.login = _login;
    authServiceFactory.logOut = _logOut;
    authServiceFactory.fillAuthData = _fillAuthData;
    authServiceFactory.authentication = _authentication;

    return authServiceFactory;
  }])
