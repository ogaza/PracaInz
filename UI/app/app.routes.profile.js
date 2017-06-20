angular.module('app')
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      // HOME STATES AND NESTED VIEWS ========================================
      // .state('home',
      // {
      //   url: '/',
      //   templateUrl: '../app/components/home/homeView.html',
      //   controller: 'homeController'
      // })
      // Posts view
      .state('profile',
      {
        url: '/',
        templateUrl: '../app/components/profile/profileView.html',
        controller: 'profileController'
        // ,
        // resolve: {
        //   posts: function (postsService) {
        //     return postsService.getAll()
        //   }
        // }
      })
  })
