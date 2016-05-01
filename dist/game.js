System.register(['pixi.js'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var pixi_js_1;
    var Game;
    return {
        setters:[
            function (pixi_js_1_1) {
                pixi_js_1 = pixi_js_1_1;
            }],
        execute: function() {
            Game = (function () {
                function Game() {
                }
                Game.run = function () {
                    var renderer = new pixi_js_1["default"].WebGLRenderer(800, 600);
                    console.log(renderer);
                };
                return Game;
            }());
            exports_1("default", Game);
        }
    }
});
