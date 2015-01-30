angular.module("jugBand").directive("artistExplorer", ["$rootScope", function ($rootScope) {
    return{
        restrict: "A",
        replace: true,
        transclude: true,
        scope: {
            artists: "=",
            size: "="
        },
        templateUrl: 'partials/artists/artistExplorerResults.html',
        link: function (scope, element) {

        }
    }
}]);
