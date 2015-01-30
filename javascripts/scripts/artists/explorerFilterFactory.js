"use strict";
angular.module("contentDiscovery").factory("explorerFilterFactory", [function () {
    var searchMatchFunction = function (searchTerm, data) {
        return(new RegExp(searchTerm, "gi")).test(data.search)
    };
    var showTypeMatchFunction = function (showType, data) {
        return showType === "" || _.any(data.showTypes, function (showTypeInList) {
            return showTypeInList.label === showType
        })
    };
    var ExplorerFilterFactory = function (params) {
        this.value = params.value || "";
        this.name = params.displayName;
        this.matchFn = params.matchFn;
    };
    ExplorerFilterFactory.prototype = {
        set: function (value) {
            this.value = value;
        }, 
        getDisplayName: function () {
            return this.name || this.value;
        }, 
        reset: function () {
            this.value = "";
        }, 
        isActive: function () {
            return this.value !== "";
        }, 
        match: function (data) {
            return this.matchFunction(this.value, data);
        }
    };
    return {
        createSearch: function (value) {
            return new ExplorerFilterFactory({value: value, matchFunction: searchMatchFunction})
        }, 
        createShowType: function (value) {
            return new ExplorerFilterFactory({value: value, matchFunction: showTypeMatchFunction})
        }
    }
}]);