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
        };
        var profile = {
            name: 'Fang Jin',
            title: 'Front-end Architect',
            email: 'windmaomao @ gmail',
            phone: '(949) 302-7928',
            location: 'Raleigh, North Carolina',
            description: 'I specialize in developing websites in healthcare, banking, real estate and university sectors. Overall my projects have reached 11 million users in production. I enjoy drafting and architecting front facing websites that talk to large enterprise dataset, most of time involving UI/UX design tailored for your business workflow.',
            keywords: 'AngularJS, Sass, Bootstrap, Webpack, Gulp, Git'
        };

        return {
            app: app,
            profile: profile
        };
    }

})();
