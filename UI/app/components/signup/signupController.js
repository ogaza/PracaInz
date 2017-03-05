angular.module('app')
    .controller('signupController', ['$scope', '$location', '$timeout', 'authService',

      function ($scope, $location, $timeout, authService) {
        $scope.savedSuccessfully = false;
        $scope.message = '';

        $scope.errors = [];

        $scope.registration = {
          userName: '',
          password: '',
          confirmPassword: ''
        };

        $scope.signUp = function () {
          authService.saveRegistration($scope.registration)
            .then(function (response) {
              $scope.savedSuccessfully = true
              $scope.message = 'Registered successfully. ' +
               'You will be redirected to login page in two seconds'
              $scope.errors = [];
              startTimer();
            }, function (response) {

              $scope.savedSuccessfully = false;
              $scope.message = 'Failed to register a new user';

              for (var key in response.data.modelState) {
                 for (var i = 0; i < response.data.modelState[key].length; i++) {
                     $scope.errors.push(response.data.modelState[key][i]);
                 }
              }
            });
        };

        var startTimer = function () {
          var timer = $timeout(function () {
            $timeout.cancel(timer)
            $location.path('/login')
          }, 2000)
        };
      }
    ]);
