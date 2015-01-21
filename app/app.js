define(function(require, exports, module) {
    "use strict";

    var _ = require("lodash");
    var $ = require("jquery");
    var Backbone = require("backbone");
    var Layout = require("layoutmanager");
    var mongodb = require("backbone-mongodb");
    var SubRoute = require("subroute");

    var app = module.exports;

    // The root path to run the application through.
    app.root = "/";
    
    app.api = 'http://localhost:8000';
    
    _.extend(Backbone.Model.prototype, Backbone.MongoModel.mixin);
    
    app.changeContentHeader = function(title, breadcrumb) {
        $(".content-header h1").text(title);
        var $ol = $(".content-header ol.breadcrumb");
        $ol.empty();
        $ol.append('<li><a href=""><i class="fa fa-dashboard"></i> Home</a></li>');
        _.each(breadcrumb, function(item) {
            var a = '', i = '', li = '', active = '';
            if (item.icon) { i = '<i class="'+item.icon+'"></i> '; }
            if (item.href) {
                a = '<a href="'+item.href+'">'+i+item.text+'</a>';
                li = '<li>'+a+'</li>';
            } else {
                if (item.active) { active = 'class="active"'; }
                li = '<li '+active+'>'+item.text+'</li>'; 
            }
            $ol.append(li);
        });
    }
    
    app.Layout = new Backbone.Layout({
        el: '.right-side'
    });
    
    app.ModalLayout = new Backbone.Layout({
        el: '#modal-layout'
    });
});