angular.module('app')
  .directive('editPost', function () {
    return {
      restrict: 'E',
      scope: {
        post: '=',
        // onEdit: '&',
        // onDelete: '&',
        onSave: '&',
        isVisible: '='
        // onEditCommentClick: '&',
      },
      templateUrl: '../app/shared/directives/editPost/editPost.html'
    }
  })
