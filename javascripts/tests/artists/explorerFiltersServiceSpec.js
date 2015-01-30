'use strict';

describe('explorer filters service', function () {

    var explorerFiltersService, filtersObj;
    beforeEach(module('jugBand'));

// Wrap the parameter in underscores
    beforeEach( inject( function(_explorerFiltersService_){
        explorerFiltersService = _explorerFiltersService_;
        filtersObj = explorerFiltersService.create();

    }));
    [
        {
            activeFilters: {
                guff: {isActive: function() {return false}}
            },
            expectedResponse: false,
            filtersCount:0
        },
        {
            activeFilters: {
                blah: {isActive: function () {return true}}
            },
            expectedResponse: true,
            filtersCount: 1
        },

        {
            activeFilters: {
                test: {isActive: function() {return true}},
                hello: {isActive: function() {return true}}
            },
            expectedResponse: true,
            filtersCount:2
        }
    ].forEach(function(scenario) {
        it('returns ' + scenario.expectedResponse + ' for method hasActiveFilters when filters object contains ' + scenario.filtersCount + ' active filter(s)', function() {
            given:

            when:
                angular.extend(filtersObj, scenario.activeFilters);
            then:
                expect(filtersObj.hasActiveFilters()).toBe(scenario.expectedResponse);
        });
    });

    it('calls the reset method for all filters present', function() {
        given:

            var resetSpy1 = sinon.spy(),
                resetSpy2 = sinon.spy();
        when:
            angular.extend(filtersObj, {
                test: {reset: resetSpy1},
                hello: {reset: resetSpy2}
            });
        and:
            filtersObj.resetAllFilters()
        then:
            expect(resetSpy1).toHaveBeenCalled();
            expect(resetSpy2).toHaveBeenCalled();
    });

});
