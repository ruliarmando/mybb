define(function(require, exports, module) {
    "use strict";
    
    var app = require('app');
    
    var Layout = Backbone.Layout.extend({
        tagName: 'li',
        
        template: _.template('<a href="/posts/view/<%= model.id %>"><%= model.get("title") %></a>'),
        
        serialize: function() {
            return { model: this.model };
        }
    });
    
    module.exports = Layout;
});