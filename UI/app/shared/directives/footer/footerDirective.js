angular.module('app')
  .directive('appFooter', function () {
    var ctrl = ['$scope', '$state', 'authService', function ($scope, $state, authService) {
      
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
      templateUrl: '../app/shared/directives/footer/footerView.html',
      // link: function (scope, elm, attrs, controller) {
      //   var x = 1;
      // },
      // bindToController: true
    }
  })
