(function() {
    'use strict';

    angular
        .module('ecoforo2App')
        .filter('capitalize', capitalize);

    function capitalize() {
        return capitalizeFilter;

        function capitalizeFilter (input) {
            if (input !== null) {
                input = input.toLowerCase();
            }
            return input.substring(0, 1).toUpperCase() + input.substring(1);
        }
    }
})();