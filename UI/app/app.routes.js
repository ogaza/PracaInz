angular.module('app')
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      // HOME STATES AND NESTED VIEWS ========================================
      .state('home',
      {
        url: '/',
        templateUrl: '../app/components/home/homeView.html',
        controller: 'homeController'
      })
      // Posts view
      .state('posts',
      {
        url: '/posts',
        // url: '/',
        templateUrl: '../app/components/posts/postsView.html',
        controller: 'postsController',
        resolve: {
          posts: function (postsService) {
            return postsService.getAll()
          },
          selectedPostId: function () {
            return 0
          }
        }
      })
      .state('posts.edit',
      {
        url: '/{id}/edit',
        // templateUrl: '../app/components/posts/editPostView.html',
        templateUrl: '../app/components/posts/postsView.html',
        controller: 'postsController',
        resolve: {
          selectedPostId: function ($stateParams) {
            return $stateParams.id
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
    // $urlRouterProvider.otherwise('posts')

    // use the HTML5 History API
    $locationProvider.html5Mode(true)
    // $locationProvider.hashPrefix('!');
  })
