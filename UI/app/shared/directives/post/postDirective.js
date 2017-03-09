angular.module('app')
  .directive('post',
    function () {
      return {
        restrict: 'E',
        scope: {
          post: '='
        },
        templateUrl: '../app/shared/directives/post/postView.html'
      }
    })
