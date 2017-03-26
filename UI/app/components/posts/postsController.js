angular.module('app')
    .controller('postsController',
  [
    '$scope', '$state', 'postsService', 'posts',
    function ($scope, $state, postsService, posts) {
      $scope.currentStateName = $state.current.name

      $scope.selectedPostId = $state.params.postId;

      $scope.selectedCommentId = $state.params.commentId

      $scope.idOfPostToEdit = $scope.selectedCommentId ? 0 : $scope.selectedPostId;

      $scope.newPost = {}

      $scope.posts = posts

      $scope.onSavePostClick = function (post) {
        postsService.save(post)
        // args: state, stateParams, options
        $state.transitionTo('posts', null, {reload: true})
      }

      $scope.onEditPostClick = function (id) {
        console.log('about to edit post: ' + id)

        var idAsInt = parseInt(id)
        // args: state, stateParams
        $state.transitionTo('posts.edit', {postId: idAsInt})
      }

      $scope.onDeletePostClick = function (id) {
        console.log('about to delete post: ' + id)

        postsService.remove(id)
        // args: state, stateParams, options
        $state.transitionTo('posts', null, {reload: true})
      }

      $scope.onEditCommentClick = function (id, commentId) {
        console.log('about to transition to edit comment ' + commentId)

        var idAsInt = parseInt(id)
        var commentIdAsInt = parseInt(commentId)
        // args: state, stateParams
        $state.transitionTo(
          'posts.editComment',
          {id: idAsInt, commentId: commentIdAsInt})
      }
    }
  ])
