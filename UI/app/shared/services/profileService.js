angular.module('app')
  .factory('profileService', ['$http', '$q',
    function ($http, $q) {

      var serviceBase = 'http://localhost:10001/'

      // TODO: implemet saveProfile
      var saveProfile = function (profile) {

        // profile.dateModified = new Date()
        //
        // var idAsInt = parseInt(profile.id)
      }

      // TODO: implemet getProfile
      var getProfile = function (userId) {
        var idAsInt = parseInt(userId)
      }

      var savePicture = function (file) {
        console.log('sending a picture to the api')

        var deferred = $q.defer()

        var fd = new FormData();

        fd.append('file', file);

        $http.post(serviceBase + 'api/account/photo', fd, {
          transformRequest: angular.identity,
          headers: {'Content-Type': undefined}
        }).then(
          function(response){
            console.log('profileService: sending a picture finished successfully')
            deferred.resolve(response)
          },
          function(error){
            console.log('profileService: sending a picture finished with ERROR')
            deferred.reject(error)
          })

        return deferred.promise
      }

      return {
        getProfile: getProfile,
        saveProfile: saveProfile,
        savePicture: savePicture
      }
    }])
