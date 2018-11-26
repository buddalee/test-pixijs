System.register([], function (exports_1, context_1) {
    "use strict";
    var application, Main;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Main = (function () {
                function Main() {
                }
                Main.prototype.initGame = function () {
                    var gameCanvasContext = jQuery("#gameCanvas")[0];
                    exports_1("application", application = new PIXI.Application(960, 540, { backgroundColor: 0x000000, view: gameCanvasContext }));
                    var bunny = PIXI.Sprite.fromImage('assets/bunny.png');
                    bunny.x = application.screen.width / 2;
                    bunny.y = application.screen.height / 2;
                    application.stage.addChild(bunny);
                    this.onResize();
                    window.onresize = this.onResize;
                };
                Main.prototype.onResize = function () {
                    var w = window.innerWidth;
                    var h = window.innerHeight;
                    var scale = Math.min(w / 860, h / 540);
                    application.view.style.left = (w - scale * 860) / 2 + "px";
                    application.view.style.top = (h - scale * 540) / 2 + "px";
                    application.view.style.width = scale * 860 + "px";
                    application.view.style.height = scale * 540 + "px";
                };
                return Main;
            }());
            exports_1("Main", Main);
        }
    };
});
