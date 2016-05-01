System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Game;
    return {
        setters:[],
        execute: function() {
            Game = (function () {
                function Game() {
                }
                Game.run = function () {
                    alert("ok");
                };
                return Game;
            }());
            exports_1("default", Game);
        }
    }
});
