angular.module('app')
  .factory('postsService'['$http', function ($http) {
    var serviceBase = 'http://localhost:10001/'

    var postsService = {}

    function onGetOrdersSuccess (results) {
      return results
    };

    var _getOrders = function () {
      return $http.get(serviceBase + 'api/posts')
        .then(onGetOrdersSuccess)
    }

    postsService.getOrders = _getOrders

    return postsService
  }])
