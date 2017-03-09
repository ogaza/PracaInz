angular.module('app')
    .controller('addPostController',
  [
    '$scope', '$location', 'postsService',
    function ($scope, $location, postsService) {
      $scope.post = {
        text: ''
      }

      $scope.savePost = function () {
        postsService.save($scope.post)

        $location.path('/posts')
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
