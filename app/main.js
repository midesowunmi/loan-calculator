/**
 * Created with JetBrains WebStorm.
 * User: Mide
 * Date: 1/6/17
 * Time: 10:16 AM
 * To change this template use File | Settings | File Templates.
 */
// main.js file single entry point into the application, also manual bootstrap for AngularJS
require(['app.js'],
    function() {
        'use strict';

        angular.bootstrap(document, ['app']);
    }
);
