/**
 * App entry module
 *
 * @date 10/7/16
 * @author Fang Jin <windmaomao@gmail.com>
 */

(function () {
    'use strict';

    angular
        .module('app', [
            // Angulars
            // '$http', '$q',
            // 'ngMessages'

            // Vendors
            // 'ui.router',             // router
            // 'restangular',           // api
            // 'localytics.directives'  // chosen
            // 'ngDialog'               // dialog
            // 'fillHeight'             // fill height
            // 'ui.bootstrap',          // bootstrap
            // 'ui.slimscroll',         // scroll

            // Features
            // 'app.lodash',               // -> _
            // 'app.api',                  // -> central
            'app.route',
            // 'app.layout',
            // 'app.aof',
        ])
        // setup lodash
        .constant('_', window._)
    ;


})();
