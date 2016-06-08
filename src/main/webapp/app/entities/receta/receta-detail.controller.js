(function() {
    'use strict';

    angular
        .module('ecoforo2App')
        .controller('RecetaDetailController', RecetaDetailController);

    RecetaDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'DataUtils', 'entity', 'Receta', 'Comentario', 'User'];

    function RecetaDetailController($scope, $rootScope, $stateParams, DataUtils, entity, Receta, Comentario, User) {
        var vm = this;

        vm.receta = entity;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;

        var unsubscribe = $rootScope.$on('ecoforo2App:recetaUpdate', function(event, result) {
            vm.receta = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
