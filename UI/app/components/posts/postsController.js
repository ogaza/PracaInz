angular.module('app')
    .controller('postsController',
  [
    '$scope', 'postsService', function ($scope, postsService) {
      $scope.posts = postsService.getAll()
    }
  ])
