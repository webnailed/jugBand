angular.module("jugBand").directive("explorerResult", ["$rootScope", function ($rootScope) {
    return{
        restrict: "A",
        scope: {
            explorerResult: "="
        },
        templateUrl: 'partials/artists/explorerResult.html',
        link: function (scope, element) {
            //scope.explorerResult.image.src
        }
    }
}]);
