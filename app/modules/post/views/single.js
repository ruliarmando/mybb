define(function(require, exports, module) {
    "use strict";
    
    var app = require('app');
    
    var Layout = Backbone.Layout.extend({
        initialize: function(options) {
            this.$el.on('hidden.bs.modal', this.hide.bind(this));
        },
        
        className: 'modal fade',
        attributes: {
            id: "myModal",
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "myModalLabel",
            "aria-hidden": "true"
        },
        template: require('tpl!./single'),
        
        serialize: function() {
            return { model: this.model };
        },
        
        afterRender: function() {
            this.$el.modal('show');
        },
        
        hide: function() {
            app.ModalLayout.removeView("#content");
            app.router.go('posts', 'list');
        }
    });
    
    module.exports = Layout;
});