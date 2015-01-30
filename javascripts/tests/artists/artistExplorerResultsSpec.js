'use strict';

describe('Directive: artistExplorer', function () {

    beforeEach(module('jugBand', 'partials'));
    var element, scope, compiledElement, elementHtml, directiveCount;
    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
        element = angular.element('<div artist-explorer artists="artists" size="size">Theres no bloody artists</div>');
    }));
    it('should render correct artist stickers into the DOM when passes a valid artist array', inject(function ($compile) {
        given:
            angular.extend(scope,{
                artists : [
                    {id: 1, title: 'Howlin Wolf'},
                    {id: 2, title: 'Leadbelly'},
                    {id: 3, title: 'John Lee Hooker'}
                ],
                size: 3
            });

        when:
            compiledElement = $compile(element)(scope);
            scope.$digest();
            elementHtml = compiledElement.html();
        then:
            directiveCount = (elementHtml.match(/explorer-result="artist"/g) || []).length;
            expect(elementHtml).not.toContain('Theres no bloody artists');
            expect(directiveCount).toBe(3);

    }));
    it('should render correct artist stickers into the DOM when passes a valid artist array', inject(function ($compile) {
        given:
            angular.extend(scope,{
                artists : [],
                size: 0
            });
        when:
            compiledElement = $compile(element)(scope);
            scope.$digest();
            elementHtml = compiledElement.html();
        then:
            directiveCount = (elementHtml.match(/explorer-result="artist"/g) || []).length;
            expect(elementHtml).toContain('Theres no bloody artists');
            expect(directiveCount).toBe(0);
    }));
});

