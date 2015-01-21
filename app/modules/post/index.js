define(function(require, exports, module) {
    "use strict";
    
    module.exports = {
        Model: require('./model'),
        Collection: require('./collection'),
        Views: {
            List: require('./views/list'),
            Item: require('./views/item'),
            Single: require('./views/single')
        },
        Router: require('./router')
    };
});