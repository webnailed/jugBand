angular.module("jugBand").directive("explorerOrder",  function () {
    return{
        restrict: "EA", 
        replace: true, 
        transclude: true, 
        controller: "explorerOrderCtrl", 
        scope: {
            artists: "="
        }, 
        template: "<div ng-transclude></div>",
        link: function (scope, element) {
            
        }
    }
})
.directive("explorerOrderOption", function () {
    return{
        restrict: "EA", 
        replace: true, 
        transclude: true, 
        require: "^explorerOrder", 
        scope: {
            order: "@"
        }, 
        template: '<a href="javascript:void(0)" ng-click="reorder()" ng-class="{ \'is-active\' : (orderBy === orderBy.order) }" href="javascript:void(0)" ng-transclude></a>', 
        link: function (scope, element, attr, explorerOrderCtrl) {
            scope.orderBy = explorerOrderCtrl.orderBy;
            scope.reorder = function() {
                explorerOrderCtrl.orderBy.order = scope.order;
                explorerOrderCtrl.sortItems();
            };
        }
    }
}).controller('explorerOrderCtrl', ['$scope', '$filter', function($scope, $filter) {
    var self = this;
    self.orderBy = $scope.orderBy = {order: ""};
    self.sortItems = function () {
        var orderBy = self.orderBy.order;
        $scope.artists = $filter("orderBy")($scope.artists, function (item) {
            return item[orderBy];
        }, false);
    }
}]);;