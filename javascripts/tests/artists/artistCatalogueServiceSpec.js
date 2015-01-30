'use strict';

describe('artist catalogue service', function () {

    var artistCatalogueService, httpBackend, successSpy, errorSpy;
    beforeEach(module('jugBand'));

// Wrap the parameter in underscores
    beforeEach( inject( function(_artistCatalogueService_, $httpBackend){
        artistCatalogueService = _artistCatalogueService_;
        httpBackend = $httpBackend;
        successSpy = sinon.spy();
        errorSpy = sinon.spy();
    }));

    it('returns a resolved promise with the correct response when calling the getArtists method and ajax request is successful', function() {
        given:
            var mockArtists = [
                {id: 1, title: 'Howlin Wolf'},
                {id: 2, title: 'Leadbelly'},
                {id: 3, title: 'John Lee Hooker'}
            ];
            httpBackend.whenGET('/api/artists').respond(
                JSON.stringify(mockArtists)
            );
        when:
            artistCatalogueService.getArtists().then(successSpy, errorSpy);
            httpBackend.flush();
        then:
            expect(successSpy).toHaveBeenCalled();
            expect(errorSpy).not.toHaveBeenCalled();
    });

    [404, 500].forEach(function(scenario) {
        it('returns a rejected promise when calling the getArtists method and ajax request errors', function() {
            given:
                httpBackend.whenGET('/api/artists').respond(scenario);

            when:
                artistCatalogueService.getArtists().then(successSpy, errorSpy);
                httpBackend.flush();
            then:
                expect(successSpy).not.toHaveBeenCalled();
                expect(errorSpy).toHaveBeenCalled();
        });
    })

});
