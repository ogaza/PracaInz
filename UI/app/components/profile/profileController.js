angular.module('app')
    .controller('profileController',
  [
    '$scope', '$state', '$http', 'profileService',/*, 'posts',*/
    function ($scope, $state, $http, profileService/*, posts*/) {

      // $scope.selectedPostId = $state.params.postId;

      var serviceBase = 'http://localhost:10001/'

      $scope.imgSrc = serviceBase
        + 'api/account/photo/1'
        + '?time=' + new Date();

      $scope.getUrl = function () {
        return $scope.imgSrc;
      }

      $scope.savePicture = function () {

        var file = $scope.profileForm.pic.$$attr.$$element[0].files[0]

        profileService.savePicture(file)
          .then(
            function (response) {
              $state.transitionTo('profile', null, {reload: true})
            },
            function (error) {
              console.log('sending a picture finished with ERROR')
            })
      }

      // $scope.savePicture = function() {
      //
      //   console.log('sending a picture;')
      //
      //   var file = $scope.profileForm.pic.$$attr.$$element[0].files[0]
      //
      //   // var data = 'grant_type=password&username='
      //   //            + loginData.userName + '&password=' + loginData.password
      //
      //   // var deferred = $q.defer()
      //   var fd = new FormData();
      //
      //   fd.append('file', file);
      //
      //   $http.post(serviceBase + 'api/account/photo', fd, {
      //     transformRequest: angular.identity,
      //     headers: {'Content-Type': undefined}
      //   }).then(
      //     function(){
      //       console.log('sending a picture finished successfully')
      //       // $state.go('profile')
      //       // args: state, stateParams, options
      //       $state.transitionTo('profile', null, {reload: true})
      //     },
      //     function(){
      //       console.log('sending a picture finished with ERROR')
      //     })
      // }
    }
  ])
