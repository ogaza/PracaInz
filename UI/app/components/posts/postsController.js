angular.module('app')
    .controller('postsController',
  [
    '$scope', '$state', 'postsService', function ($scope, $state, postsService) {
      $scope.posts = postsService.getAll()

      $scope.editPost = function (id) {
        console.log('about to edit post: ' + id)

        var idAsInt = parseInt(id)

        $state.transitionTo('posts.edit', {id: idAsInt})
      }

      $scope.deletePost = function (id) {
        console.log('about to delete post: ' + id)
      }
    }
  ])
