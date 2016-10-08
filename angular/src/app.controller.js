/**
 * App controllers module
 *
 * @date 10/08/16
 * @author Fang Jin <fang-a.jin@db.com>
*/

(function () {
    'use strict';

    angular
        .module('app.controller', [
            'app.data'
        ])
        .controller('RootCtrl', ['$scope', 'Data', RootCtrl])
    ;

    function RootCtrl($scope, Data) {
        $scope.app = Data.app;
        $scope.profile = Data.profile;
    }

})();
