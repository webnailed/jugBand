angular.module("jugBand").directive("artistExplorer", [function () {
    return{
        restrict: "A",
        replace: true,
        transclude: true,
        scope: {
            artists: "=",
            size: "=",
            filters: "filters"
        },
        templateUrl: 'partials/artists/artistExplorerResults.html',

        var filterVisiblity = function(filterName, filter) {
            for (var i = 0; i < scope.artists.length; i++) {
                var artist = scope.artists[i];
                artist.match(filterName, filter);
                artist.compiledEl.toggleClass("is-hidden", !artist.isActive())
            }
        };

        link: function (scope, element) {
            angular.forEach(_.keys(scope.filters || {}), function (filterName) {
                scope.$watch("filters." + filterName + ".value", function (newVal, oldVal) {
                    if (newVal === oldVal) {
                        return;
                    }
                    filterVisiblity(filterName, scope.filters[filterName]);
                })
            });
        }
    }
}]);
