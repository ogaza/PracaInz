
angular.module('app')
.controller('homeController',
  [
    '$scope', 'authService', function ($scope, authService) {
      // $scope.data = 'Olaf'

      $scope.onClickTest = function () {
        authService.test()
      }
    }
  ])
