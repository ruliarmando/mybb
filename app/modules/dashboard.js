define(function(require, exports, module) {
    
    var app = require('app');
    
    var Layout = Backbone.Layout.extend({
        className: 'row',
        template: require('tpl!./dashboard')
    });
    
    module.exports = Layout;
});