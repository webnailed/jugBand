'use strict';

describe('Directive: explorer result', function () {

    beforeEach(module('jugBand', 'partials'));
    var element, scope, compiledElement, elementHtml;
    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
        element = angular.element('<div explorer-result="artist"></div>');
    }));
    it('should render explorer result with the correct data', inject(function ($compile) {
        given:
            angular.extend(scope, {
                artist : {
                    id: 1,
                    title: 'John Lee Hooker'
                }
            });
        when:
            compiledElement = $compile(element)(scope);
            scope.$digest();
            elementHtml = compiledElement.html();
        then:
            expect(elementHtml).toContain('John Lee Hooker');
    }));
});

