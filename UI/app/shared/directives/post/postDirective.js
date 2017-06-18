angular.module('app')
  .directive('post', function () {
    return {
      restrict: 'E',
      scope: {
        post: '=',
        onEdit: '&',
        onDelete: '&',
        showCancelBtn: '=',
        onEditCommentClick: '&',
        onSaveCommentClick: '&',
        onDeleteCommentClick: '&',
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
        onDelete: '&',
        showCancelBtn: '=',
        isInEditMode: '='
      },
      templateUrl: '../app/shared/directives/post/commentView.html'
    }
  })
