define(function(require, exports, module) {
    "use strict";
    
    var app = require('app');
    var Post = require('./model');
    
    var Collection = Backbone.Collection.extend({
        model: Post,
        url: app.api + '/posts'
    });
    
    module.exports = Collection;
});