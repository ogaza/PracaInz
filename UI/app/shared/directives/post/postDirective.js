angular.module('app')
  .directive('post', function () {
    return {
      restrict: 'E',
      scope: {
        post: '=',
        onEdit: '&',
        onDelete: '&'
      },
      templateUrl: '../app/shared/directives/post/postView.html',
      // link: function (scope, elm, attrs) {
      // }
    }
  })
