angular.module('app')
  .directive('modal', function () {
    return {
      restrict: 'E',
      scope: {
        post: '=',
        // onEdit: '&',
        // onDelete: '&',
        // onSave: '&',
        isVisible: '='
        // onEditCommentClick: '&',
      },
      templateUrl: '../app/components/modal/modal.html'
    }
  })
