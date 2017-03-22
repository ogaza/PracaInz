angular.module('app')
    .controller('editPostController',
  [
    '$scope', '$state', '$stateParams', 'postsService', 'selectedPost',
    function ($scope, $state, $stateParams, postsService, selectedPost) {
      // $scope.post = $stateParams.id ?
      //   postsService.get($stateParams.id) :
      //   { text: '' }
      //
      $scope.savePost = function (post) {
        // postsService.save($scope.post)
        postsService.save(post)

        $state.transitionTo('posts')
      }

      // $scope.selectedPost = {id: $stateParams.id }
      // var post = $scope.posts.find(function (elem) {
      //   return elem.id === $scope.post.id
      // })

      // $scope.selectedId = 1 //$stateParams.id

      // post.isInEditMode = true

      $scope.selectedPost = selectedPost
    }
  ])
