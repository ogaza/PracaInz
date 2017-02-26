
angular.module("app", ["ui.router", "LocalStorageModule"]);

angular.module("app").config(["$qProvider", function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);

