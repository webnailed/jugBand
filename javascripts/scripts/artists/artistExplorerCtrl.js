'use strict';

angular.module('jugBand')
    .controller('artistExplorerCtrl', ['$scope', 'artistCatalogueService', function($scope, artistCatalogueService) {
        var artists = [];
        artists = [
            {
                id: 13,
                title: 'Mamie Smith',
                dob: '1883-05-26T00:00:00.000Z',
                image: {
                    src: 'assets/mamie-smith.jpg'
                }
            },
            {
                id: 2,
                title: 'Howlin\' Wolf',
                dob: '1910-06-10T00:00:00.000Z',
                image: {
                    src: 'assets/howlin-wolf-2.jpg'
                }
            },
            {
                id: 3,
                title: 'Sonny-boy Williamson',
                dob: '1913-04-30T00:00:00.000Z',
                image: {
                    src: 'assets/sonny-boy-williamson.jpg'
                }
            },
            {
                id: 4,
                title: 'Muddy Waters',
                dob: '1913-04-04T00:00:00.000Z',
                image: {
                    src: 'assets/muddy-waters.jpg'
                }
            },
            {
                id: 5,
                title: 'Leadbelly',
                dob: '1888-01-20T00:00:00.000Z',
                image: {
                    src: 'assets/leadbelly.jpg'
                }
            },
            {
                id: 6,
                title: 'John Lee Hooker',
                dob: '1917-08-22T00:00:00.000Z',
                image: {
                    src: 'assets/john-lee-hooker.jpg'
                }
            },
            {
                id:11,
                title: 'Bessie Smith',
                dob: '1894-04-15T00:00:00.000Z',
                image: {
                    src: 'assets/bessie-smith.jpg'
                }
            },
            {
                id: 8,
                title: 'Blind Lemon Jefferson',
                dob: '1893-09-24T00:00:00.000Z',
                image: {
                    src: 'assets/blind-lemon-jefferson.jpg'
                }
            },
            {
                id: 9,
                title: 'Ida Cox',
                dob: '1896-02-25T00:00:00.000Z',
                image: {
                    src: 'assets/ida-cox.jpg'
                }
            },
            {
                id: 7,
                title: 'Blind Willie Johnson',
                dob: '1897-01-22T00:00:00.000Z',
                image: {
                    src: 'assets/blind-willie-johnson.jpg'
                }
            },
            {
                id: 10,
                title: 'B B King',
                dob: '1925-09-16T00:00:00.000Z',
                image: {
                    src: 'assets/b-b-king.jpg'
                }
            },
            {
                id: 12,
                title: 'Ma Rainey',
                dob: '1886-04-26T00:00:00.000Z',
                image: {
                    src: 'assets/ma-rainey.jpg'
                }
            }
        ];
        $scope.artists = artists;
        $scope.size = 13;
        artistCatalogueService.getArtists().then(function(artists) {
            $scope.artists = artists;
            $scope.size = artists.length;
        }, function(error) {
            $scope.error = error;

        })
    }]);
