(function() {
    'use strict';

    angular
        .module('ecoforo2App')
        .factory('ComentarioSearch', ComentarioSearch);

    ComentarioSearch.$inject = ['$resource'];

    function ComentarioSearch($resource) {
        var resourceUrl =  'api/_search/comentarios/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
