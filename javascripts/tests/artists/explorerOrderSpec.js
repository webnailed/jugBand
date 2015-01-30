describe('Explorer sorting tests', function () {

    beforeEach(module('jugBand', 'partials'));
    var element, scope, compiledElement;
    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
        element = angular.element('<parent>\
                                    <explorer-order-option order="title">A-Z</explorer-order-option>\
                                    </parent>');
    }));
    it('should call the parent scope controllers sortItems method when calling the explorer order options reorder method', inject(function ($compile) {
        given: 
            var explorerOrderCtrlMock = {
                sortItems: function() {
                    return '';
                },
                orderBy: {
                    order: ''
                }
            };
            var sortItemsSpy = sinon.spy(explorerOrderCtrlMock, 'sortItems');
            element.data('$explorerOrderController', explorerOrderCtrlMock);
        when:
            compiledElement = $compile(element)(scope);
        and:
            element = element.find('a')[0];
            scope = angular.element(element).isolateScope();
            scope.reorder();
        then:
            expect(sortItemsSpy).toHaveBeenCalled();
    }));

    [
        {
            orderBy: 'id',
            expectedArtists: [
                {
                    id: 1,
                    title: 'bca',
                    dob: '1917-02-22T00:00:00.000Z'
                },
                {
                    id: 2,
                    title: 'abc',
                    dob: '1917-08-29T00:00:00.000Z'
                },
                {
                    id: 3,
                    title: 'cba',
                    dob: '1917-08-22T00:00:00.000Z'
                }
            ]
        },
        {
            orderBy: 'title',
            expectedArtists: [
                {
                    id: 2,
                    title: 'abc',
                    dob: '1917-08-29T00:00:00.000Z'
                },
                {
                    id: 1,
                    title: 'bca',
                    dob: '1917-02-22T00:00:00.000Z'
                },
                {
                    id: 3,
                    title: 'cba',
                    dob: '1917-08-22T00:00:00.000Z'
                }
            ]
        }, 
        {
            orderBy: 'dob',
            expectedArtists: [
                {
                    id: 1,
                    title: 'bca',
                    dob: '1917-02-22T00:00:00.000Z'
                },
                {
                    id: 3,
                    title: 'cba',
                    dob: '1917-08-22T00:00:00.000Z'
                },
                {
                    id: 2,
                    title: 'abc',
                    dob: '1917-08-29T00:00:00.000Z'
                }
            ]
        }
    ].forEach(function(scenario) {
        it('should reorder a given item list by ' + scenario.orderBy , inject(function ($rootScope, $controller) {
            given: 
                var $scope = $rootScope.$new();
                $scope.artists = [
                    {
                        id: 1,
                        title: 'bca',
                        dob: '1917-02-22T00:00:00.000Z'
                    },
                    {
                        id: 2,
                        title: 'abc',
                        dob: '1917-08-29T00:00:00.000Z'
                    },
                    {
                        id: 3,
                        title: 'cba',
                        dob: '1917-08-22T00:00:00.000Z'
                    }
                ]
                var explorerOrderCtrl = $controller('explorerOrderCtrl', {
                    '$scope': $scope
                });
                explorerOrderCtrl.orderBy = {
                    order: scenario.orderBy
                };
                
            when:
                explorerOrderCtrl.sortItems();
            then:
                expect($scope.artists).toEqual(scenario.expectedArtists);
        }));
    });
});