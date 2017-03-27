angular.module('app')
  .directive('post', function () {
    return {
      restrict: 'E',
      scope: {
        post: '=',
        onEdit: '&',
        onDelete: '&',
        onSave: '&',
        isInEditMode: '=',
        showCancelBtn: '=',
        onEditCommentClick: '&',
        onSaveCommentClick: '&',
        selectedCommentId: '='
      },
      templateUrl: '../app/shared/directives/post/postView.html'
    }
  })
  .directive('comment', function () {
    return {
      restrict: 'E',
      scope: {
        postId: '=',
        comment: '=',
        onEdit: '&',
        onSave: '&',
        showCancelBtn: '=',
        isInEditMode: '='
      },
      templateUrl: '../app/shared/directives/post/commentView.html'
    }
  })
