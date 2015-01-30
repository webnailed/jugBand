'use strict';

angular.module('jugBand', ['restangular', 'ui.router'])
    .config(function ($locationProvider, RestangularProvider, $stateProvider) {
        // prevent adding hash onto end of query string
        $locationProvider.html5Mode({enabled: true, requireBase: true}).hashPrefix("!")
        RestangularProvider.setBaseUrl('/api');
        $stateProvider.state("artistExplorer", {
                url: "/artists/explorer",
                templateUrl: "partials/artists/explorer.html",
                controller: "artistExplorerCtrl",
                pageKey: "artistExplorer"});
//            .state("moviesCollections", {
//                url: "/movies/collections",
//                templateUrl: "partials/movies/collections.html",
//                controller: "MoviesCollectionsCtrl",
//                pageKey: "moviesCollections"})+
//            .state("moviesLiveTv", {
//                url: "/movies/livemovies",
//                templateUrl: "partials/movies/livetv.html",
//                controller: "MoviesLiveTvCtrlu    ",
//                pageKey: "moviesLiveTv"})
//            .state("moviesGenre", {
//                url: "/movies/genres/{genre:.+[^/]}",
//                controller: ["$state", function ($state) {
//                    $state.go("moviesExplorer.genre", {
//                        genreId: $state.params.genre
//                    }, null)
//                }],
//                pageKey: "moviesExplorer"})
//            .state("moviesCollection", {
//                    url: "/movies/collections/{collection:.+[^/]}",
//                    templateUrl: "partials/movies/collection.html",
//                    controller: "MoviesCollectionCtrl",
//                    pageKey: "moviesCollection",
//                    resolve: {
//                        collection: ["$stateParams", "catalogue", function ($stateParams, catalogue) {
//                            return catalogue.getCollection($stateParams.collection)
//                         }]
//                    },
//                    getCustomParams: function (resolvedParams) {
//                        return {
//                            title: resolvedParams.globals.collection.getTitle()
//                        }
//                    }
//                });
    });