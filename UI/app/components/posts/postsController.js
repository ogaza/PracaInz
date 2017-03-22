angular.module('app')
    .controller('postsController',
  [
    '$scope', '$state', 'postsService', 'posts', 'selectedPostId',
      function ($scope, $state, postsService, posts, selectedPostId) {

      $scope.selectedPostId = selectedPostId

      $scope.newPost = {}

      $scope.posts = posts

      $scope.savePost = function (post) {
        postsService.save(post)
        $state.transitionTo('posts')
      }

      $scope.editPost = function (id) {
        console.log('about to edit post: ' + id)

        var idAsInt = parseInt(id)

        $state.transitionTo('posts.edit', {id: idAsInt})
      }

      $scope.deletePost = function (id) {
        console.log('about to delete post: ' + id)

        postsService.remove(id);

        $state.transitionTo('posts')
      }
    }
  ])
