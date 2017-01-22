angular.module("app").config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state("home",
        {
            url: "/",
            templateUrl: "../app/components/home/homeView.html",
            controller: "homeController"
        });

    $urlRouterProvider.otherwise("/");

    // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
    //.state("about",
    //{
    //    // we'll get to this in a bit       

    //});

    // catch all route
    // send users to the form page 
    // $urlRouterProvider.otherwise("home");
});