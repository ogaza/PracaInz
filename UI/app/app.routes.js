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
      // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
      // .state('about',
      // {
      //   url: '/about',
      //   templateUrl: '../app/components/about/aboutView.html',
      //   controller: 'aboutController'
      // })
      // Posts view
      .state('posts',
      {
        // url: '/posts',
        url: '/',
        templateUrl: '../app/components/posts/postsView.html',
        controller: 'postsController'
      })

      .state('posts.add',
      {

        url: '/add',
        templateUrl: '../app/components/posts/editPostView.html',
        controller: 'editPostController',
        resolve: {
          selectedPost: function($stateParams, postsService) {
            return {}
          }
        }
      })

      .state('posts.edit',
      {
        url: '/{id}/edit',
        // templateUrl: '../app/components/posts/editPostView.html',
        templateUrl: '../app/components/posts/postsView.html',
        controller: 'editPostController',
        resolve: {
          selectedPost: function($stateParams, postsService) {
            return postsService.get($stateParams.id)
          }
        }
      })

      // login PAGE
      .state('login',
      {
        url: '/login',
        templateUrl: '../app/components/login/loginView.html',
        controller: 'loginController'
      })
      .state('signup',
      {
        url: '/signup',
        templateUrl: '../app/components/signup/signupView.html',
        controller: 'signupController'
      })

    $urlRouterProvider.otherwise('home')

    // use the HTML5 History API
    $locationProvider.html5Mode(true)
    // $locationProvider.hashPrefix('!');
  })
