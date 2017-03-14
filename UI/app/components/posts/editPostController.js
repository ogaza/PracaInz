angular.module('app')
    .controller('editPostController',
  [
    '$scope', '$state', '$stateParams', 'postsService',
    function ($scope, $state, $stateParams, postsService) {
      $scope.post = $stateParams.id ?
        postsService.get($stateParams.id) :
        { text: '' }

      $scope.savePost = function () {
        postsService.save($scope.post)

        $state.transitionTo('posts')
      }
    }
  ])
