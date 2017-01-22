
angular.module("app", ["ui.router"]);

angular.module("app").config(["$qProvider", function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);

