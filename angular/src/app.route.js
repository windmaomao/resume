/**
 * App route module
 *
 * @date 10/7/16
 * @author Fang Jin <windmaomao@gmail.com>
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

            // $stateProvider.state('/', {
            //     abstract: true,
            //     template: '<ui-view />',
            // });

            var pages = [
                'home', 'recommend', 'experience',
                'architect', 'component', 'misc',
                'contact'
            ];
            _.each(pages, function(page) {
                $stateProvider.state(page, {
                    // parent: '/',
                    url: '/' + page,
                    templateUrl: 'templates/page.' + page + '.html'
                });
            });
        }])
    ;

})();
