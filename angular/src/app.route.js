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

            var pages = [
                'home', 'recommend', 'experience',
                'architect', 'component', 'misc',
                'contact'
            ];
            _.each(pages, function(page) {
                $stateProvider.state(page, {
                    url: '/' + page,
                    templateUrl: 'templates/page.' + page + '.html'
                });
            });
        }]
    );

})();
