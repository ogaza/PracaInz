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
  .directive('comment', function () {
    return {
      restrict: 'E',
      scope: {
        comment: '='
      },
      templateUrl: '../app/shared/directives/post/commentView.html',
      // link: function (scope, elm, attrs) {
      // }
    }
  })
