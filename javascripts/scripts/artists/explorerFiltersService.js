"use strict";
angular.module("jugBand").factory("explorerFiltersService", [function () {
    var FiltersObj = function () {

    };
    FiltersObj.prototype = {
        hasActiveFilters: function () {
            return _.any(this, function (filter) {
                return filter.isActive()
            })
        },
        resetAllFilters: function () {
            angular.forEach(this, function (filter) {
                filter.reset()
            })
        }
    };
    return {
        create: function () {
            return new FiltersObj;
        }
    }
}]);