'use strict';

describe('artistExplorerCtrl', function () {
    var $scope, createController, mockedArtistCatalogueService, fakeArtistsResponse;

    beforeEach(module('jugBand'));

    // Wrap the parameter in underscores
    beforeEach( inject( function($rootScope, $controller){
        $scope = $rootScope.$new();
        fakeArtistsResponse = [
            {id: 1, name: 'Howlin Wolf'},
            {id: 2, name: 'Leadbelly'},
            {id: 3, name: 'John Lee Hooker'}
        ];
        createController = function() {
            return $controller('artistExplorerCtrl', {
                '$scope': $scope,
                'artistCatalogueService': mockedArtistCatalogueService
            });
        };
    }));

    it('calls artistCatalogue to get partials and places response on scope when successful', inject(function($q) {
        given:
            mockedArtistCatalogueService = {
                getArtists: sinon.stub().returns($q.when(fakeArtistsResponse))
            };
            createController();
        when:
            $scope.$digest();
        then:
            expect(mockedArtistCatalogueService.getArtists).toHaveBeenCalled();
            expect($scope.artists).toEqual(fakeArtistsResponse);
    }));

    it('calls artistCatalogue to get partials and places response on scope when successful', inject(function($q) {
        given:
            var errorResponse = {
                error: 'its blown up'
            };
            mockedArtistCatalogueService = {
                getArtists: sinon.stub().returns($q.reject(errorResponse))
            };
            createController();
        when:
            $scope.$digest();
        then:
            expect(mockedArtistCatalogueService.getArtists).toHaveBeenCalled();
            expect($scope.artists).toBeUndefined();
            expect($scope.error).toEqual(errorResponse);

    }));
});

