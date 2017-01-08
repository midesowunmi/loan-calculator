/**
 * Created with JetBrains WebStorm.
 * User: Mide
 * Date: 1/6/17
 * Time: 9:23 AM
 * To change this template use File | Settings | File Templates.
 */
require.config({
    paths: {
          "app": "../app.js"
    }
})
require(['../app.js'],
    function() {
        angular.bootstrap(document, ['app']);
    }
);
