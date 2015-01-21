define(function(require, exports, module) {
    "use strict";
    
    var app = require('app');
    var List = require('./views/list');
    var Single = require('./views/single');
    var Collection = require('./collection');
    
    var Router = Backbone.SubRoute.extend({
        initialize: function(options) {
            this.collection = new Collection();
        },
        
        routes: {
            "list": "showAll",
            "view/:id": "showOne",
            "add": "add",
            "edit/:id": "edit",
            "delete/:id": "delete"
        },
        
        showAll: function() {
            app.changeContentHeader('Posts', [
                { active: true, text: "Posts" }
            ]);
            app.Layout.setView('.content', new List({collection: this.collection})).render();
            this.collection.fetch();
        },
        
        showOne: function(id) {
            var model = this.collection.get(id);
            console.log(model);
            app.ModalLayout.setView("#content", new Single({model: model})).render();
        },
        
        add: function() {
            
        },
        
        edit: function(id) {
            
        },
        
        "delete": function(id) {
            
        }
    });
    
    module.exports = Router;
});