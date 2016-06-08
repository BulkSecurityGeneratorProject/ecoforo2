(function() {
    'use strict';
    angular
        .module('ecoforo2App')
        .factory('Receta', Receta);

    Receta.$inject = ['$resource'];

    function Receta ($resource) {
        var resourceUrl =  'api/recetas/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
