angular.module('app')
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      // HOME STATES AND NESTED VIEWS ========================================
      .state('home',
      {
        url: '/home',
        templateUrl: '../app/components/home/homeView.html',
        controller: 'homeController'
      })
      // Posts view
      .state('posts',
      {
        url: '/posts',
        templateUrl: '../app/components/posts/postsView.html',
        controller: 'postsController',
        resolve: {
          posts: function (postsService) {
            return postsService.getAll()
          }
        }
      })
      .state('posts.create',
      {
        url: '/createPost',
        templateUrl: '../app/components/posts/postsView.html',
        controller: 'postsController'
        // params: {
        //   post: null
        // }
      })
      .state('posts.edit',
      {
        url: '/:postId/edit',
        templateUrl: '../app/components/posts/postsView.html',
        controller: 'postsController'
        // params: {
        //   post: null
        // }
      })
      .state('posts.editComment',
      {
        url: '/:postId/comments/:commentId',
        templateUrl: '../app/components/posts/postsView.html',
        controller: 'postsController'
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

    // $urlRouterProvider.otherwise('home')
    $urlRouterProvider.otherwise('profile')

    // use the HTML5 History API
    $locationProvider.html5Mode(true)
    // $locationProvider.hashPrefix('!');
  })
