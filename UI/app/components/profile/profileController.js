angular.module('app')
    .controller('profileController',
  [
    '$scope', '$state', /*'postsService', 'posts',*/
    function ($scope, $state/*, postsService, posts*/) {
      // $scope.currentStateName = $state.current.name

      // $scope.selectedPostId = $state.params.postId;

      // $scope.onCreatePostClick = function () {
      //   // postsService.save(post)
      //   // args: state, stateParams, options
      //   $state.transitionTo('posts.create', null, {reload: true})
      // }

    }
  ])
