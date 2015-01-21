define(function(require, exports, module) {
    "use strict";
    
    var app = require("app");
    var Dashboard = require("modules/dashboard");
    var Post = require("modules/post/index");

    // Defining the application router.
    var Router = Backbone.Router.extend({
        initialize: function() {
            app.Layout.render();
        },
        
        routes: {
            "": "showDashboard",
            "posts/*subroute": "invokePostsRoute"
        },
        
        // Shortcut for building a url.
        go: function() {
            return this.navigate(_.toArray(arguments).join("/"), true);
        },
        
        showDashboard: function() {
            app.changeContentHeader('Dashboard', []);
            app.Layout.setView(".content", new Dashboard()).render();
        },
        
        invokePostsRoute: function() {
            if (!this.postRoute) {
                this.postRoute = new Post.Router('posts', {createTrailingSlashRoutes: true});
            }
        }
    });

    module.exports = Router;
});
