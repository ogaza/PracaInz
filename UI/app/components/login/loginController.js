angular.module('app')
    .controller('loginController', ['$scope', '$state', 'authService',

      function ($scope, $state, authService) {
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
                function (response) {
                  $state.transitionTo('posts')
                },
                function (error) { $scope.message = error.error_description })
        }
      }
    ])
