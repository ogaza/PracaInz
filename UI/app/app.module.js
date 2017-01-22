
angular.module("app", ["ui.router"])
    .controller("homeController",
    [
        "$scope", function($scope) {
            $scope.data = "Olaf";
        }
    ]);

angular.module("app").config(["$qProvider", function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);

