System.register(['game'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var game_1;
    return {
        setters:[
            function (game_1_1) {
                game_1 = game_1_1;
            }],
        execute: function() {
            game_1["default"].run();
        }
    }
});
