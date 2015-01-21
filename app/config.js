require.config({
  paths: {
    "underscore": "../vendor/lodash/lodash.underscore",
    "lodash": "../vendor/lodash/lodash",
    "tpl": "../vendor/lodash-template-loader/loader",
    "jquery": "../vendor/jquery/jquery",
    "backbone": "../vendor/backbone/backbone",
    "layoutmanager": "../vendor/layoutmanager/backbone.layoutmanager",
    "subroute": "../vendor/backbone.subroute/backbone.subroute",
    "bootstrap": "../vendor/bootstrap/js/bootstrap",
    "jquery-ui": "../vendor/jquery-ui/jquery-ui",
    "slimScroll": "../vendor/slimScroll/jquery.slimscroll",
    "jquery-resize": "../vendor/jquery-resize/jquery.ba-resize",
    "backbone-mongodb": "../vendor/backbone-mongodb/backbone-mongodb.amd",
    "backgrid": "../vendor/backgrid/backgrid",
    "backbone-paginator": "../vendor/backbone.paginator/backbone.paginator",
    "backgrid-paginator": "../vendor/backgrid-paginator/backgrid-paginator",
    "backgrid-select-all": "../vendor/backgrid-select-all/backgrid-select-all",
    "pace": "../vendor/pace/pace.min",
  },
  
  shim: {
    "bootstrap": ["jquery"],
    "slimScroll": ["jquery"],
    "jquery-resize": ["jquery"],
    "backgrid": ["backbone"],
    "pace": []
  },

  deps: ["main"]
});
