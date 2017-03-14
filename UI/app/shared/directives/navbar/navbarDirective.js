angular.module('app')
  .directive('navbar', function () {
    var ctrl = ['$scope', '$state', 'authService', function ($scope, $state, authService) {
      $scope.auth = authService.authentication

      $scope.logout = function(){
        authService.logOut()

        $state.transitionTo('home')
      }
    }]

    return {
      restrict: 'E',
      controller: ctrl,
      // scope: {
      //   // sAuth: '='
      //   // post: '=',
      //   // onEdit: '&',
      //   // onDelete: '&'
      // },
      templateUrl: '../app/shared/directives/navbar/navbarView.html',
      // link: function (scope, elm, attrs, controller) {
      //   var x = 1;
      // },
      // bindToController: true
    }
  })
