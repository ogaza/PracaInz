angular.module('app')
  .directive('post', function () {
    return {
      restrict: 'E',
      scope: {
        post: '=',
        onEdit: '&',
        onDelete: '&',
        onSave: '&',
        isInEditMode: '='
      },
      templateUrl: '../app/shared/directives/post/postView.html',
      link: function (scope, elm, attrs) {
        // scope.selectedPost = {id: 1}
      }
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
