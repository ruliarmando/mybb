define(function(require, exports, module) {
    "use strict";
    
    var app = require('app');
    var Item = require('./item');
    
    var Layout = Backbone.Layout.extend({
        className: "row",
        template: require('tpl!./list'),
        
        initialize: function() {
            this.listenTo(this.collection, "reset sync request", this.render);
        },
        
        beforeRender: function() {
            this.collection.each(function(post) {
                this.insertView("ul", new Item({model: post}));
            }, this);
        }
    });
    
    module.exports = Layout;
});