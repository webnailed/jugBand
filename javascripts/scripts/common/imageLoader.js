angular.module('jugBand').directive('imageLoader', [function() {
    function loadImage(el) {
        el.css({
            'opacity': '1'
        });
    }
    return {
        restrict: 'A',
        scope: {
            imageLoader: '='
        },
        link: function(scope, element) {
            var imageEl = element[0];

            element.bind('load', function() {
                loadImage(element);
            });
            element.css({
                'opacity': '0'
            });
            imageEl.src = scope.imageLoader;
            if (imageEl.src && imageEl.complete) {
                loadImage(element);
            }

        }
    };

}])