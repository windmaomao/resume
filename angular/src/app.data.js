/**
 * App data module
 *
 * @date 10/7/16
 * @author Fang Jin <windmaomao@gmail.com>
 */

(function () {
    'use strict';

    angular
        .module('app.data', [
            // 'app.api'
        ])
        .constant('Data', DataProvider())
    ;

    function DataProvider() {
        var app = {
            title: 'Fang Jin',
            email: 'windmaomao at gmail',
            phone: '(949) 302-7928',
            location: 'Raleigh NC, USA'
        };

        return {
            app: app
        };
    }

})();
