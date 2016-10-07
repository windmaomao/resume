/**
 * App route module
 *
 * @date 08/12/16
 * @author Fang Jin <fang-a.jin@db.com>
 */

 (function () {
    'use strict';

    angular.module('app.route', ['ui.router'])
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            // setup default entry
            $urlRouterProvider
                .when('/', '/home')
                .otherwise('/home')
            ;

            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'templates/page.home.html'
                })
        }]
    );

})();
