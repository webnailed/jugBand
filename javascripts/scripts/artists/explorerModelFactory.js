"use strict";
angular.module("jugBand").factory("ExplorerModel", [function () {
    var ExplorerModel = function (data) {
        this.__data__ = data;
        this.__isActive = {};
    };
    ExplorerModel.prototype = {
        match: function (filterName, filter) {
            this.__isActive[filterName] = filter.match(this.__data__)
        }, 
        getTitle: function () {
            return this.__data__.title;
        }, 
        getId: function () {
            return this.__data__.id;
        },
        getDob: function () {
            return this.__data__.dob;
        },
        getImage: function() {
            return this.__data__.image;
        }
    };
    return {
        create: function (data) {
            return new ExplorerModel(data)
        }
    }

}]);