angular.module('app')
    .controller('loginController', ['$scope', '$location', 'authService',

      function ($scope, $location, authService) {
        $scope.loginData = {
          userName: '',
          password: ''
        }

        $scope.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/

        $scope.message = ''

        $scope.login = function () {
          authService
              .login($scope.loginData)
              .then(
                function (response) { $location.path('/') },
                function (error) { $scope.message = error.error_description })
        }
      }
    ])
