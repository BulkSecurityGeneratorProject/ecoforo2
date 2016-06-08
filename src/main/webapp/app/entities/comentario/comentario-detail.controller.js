(function() {
    'use strict';

    angular
        .module('ecoforo2App')
        .controller('ComentarioDetailController', ComentarioDetailController);

    ComentarioDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'DataUtils', 'entity', 'Comentario', 'Receta', 'User'];

    function ComentarioDetailController($scope, $rootScope, $stateParams, DataUtils, entity, Comentario, Receta, User) {
        var vm = this;

        vm.comentario = entity;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;

        var unsubscribe = $rootScope.$on('ecoforo2App:comentarioUpdate', function(event, result) {
            vm.comentario = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
