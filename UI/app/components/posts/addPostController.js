angular.module('app')
    .controller('addPostController',
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
  //   .controller('editPostController',
  // [
  //   '$scope', '$location', '$routeParams', 'postsService',
  //   function ($scope, $location, $routeParams, postsService) {
  //     var postFromService = postsService.get($routeParams.id)
  //
  //     $scope.post = {
  //       id: postFromService.id,
  //       text: postFromService.text
  //     }
  //
  //     $scope.savePost = function () {
  //       postsService.save($scope.post)
  //
  //       $location.path('/posts')
  //     }
  //   }
  // ])
  //   .controller('deletePostController',
  // [
  //   '$scope', '$location', '$routeParams', 'postsService',
  //   function ($scope, $location, $routeParams, postsService) {
  //     postsService.remove($routeParams.id)
  //     $location.path('/posts')
  //   }
  // ])
