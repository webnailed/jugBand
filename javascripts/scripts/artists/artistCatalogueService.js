'use strict';
angular.module('jugBand')
    .service('artistCatalogueService', function (Restangular) {
		var restangular = Restangular.withConfig(function (restangularConfigurer) {
	        restangularConfigurer.setDefaultHttpFields({cache: true});
	        restangularConfigurer.setErrorInterceptor(function (response, deferred) {
	            deferred.reject({status: response.status});
	            return false
	        });
	        restangularConfigurer.extendModel("artists", ExplorerModel.create);
	    });



        return {
            getArtists: function() {
                return restangular.all('artists').getList();
            }
        };
    });