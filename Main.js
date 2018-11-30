System.register(["./core/Event", "./core/Loader", "./core/SoundMgr", "./ui/GameScene", "./ui/MainMenuScene", "./ui/PaintingInfoScene", "./core/Stamps"], function (exports_1, context_1) {
    "use strict";
    var EventEmitter, Event_1, Loader_1, SoundMgr_1, GameScene_1, MainMenuScene_1, Event_2, PaintingInfoScene_1, Stamps_1, eventEmitter, application, canvasWidth, canvasHeight, canvasScale, stamps, Main;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Event_1_1) {
                Event_1 = Event_1_1;
                Event_2 = Event_1_1;
            },
            function (Loader_1_1) {
                Loader_1 = Loader_1_1;
            },
            function (SoundMgr_1_1) {
                SoundMgr_1 = SoundMgr_1_1;
            },
            function (GameScene_1_1) {
                GameScene_1 = GameScene_1_1;
            },
            function (MainMenuScene_1_1) {
                MainMenuScene_1 = MainMenuScene_1_1;
            },
            function (PaintingInfoScene_1_1) {
                PaintingInfoScene_1 = PaintingInfoScene_1_1;
            },
            function (Stamps_1_1) {
                Stamps_1 = Stamps_1_1;
            }
        ],
        execute: function () {
            EventEmitter = PIXI.utils.EventEmitter;
            Main = (function () {
                function Main() {
                }
                Main.prototype.initGame = function () {
                    var gameCanvasContext = jQuery("#gameCanvas")[0];
                    exports_1("application", application = new PIXI.Application(1440, 899, { backgroundColor: 0x000000, view: gameCanvasContext }));
                    exports_1("eventEmitter", eventEmitter = new EventEmitter());
                    SoundMgr_1.SoundMgr.load();
                    exports_1("stamps", stamps = new Stamps_1.Stamps());
                    console.log('!!!!');
                    eventEmitter.on(Event_1.CoreEvent.AssetsLoadComplete, function () {
                        jQuery("#loadingPage").hide();
                        MainMenuScene_1.MainMenuScene.draw();
                        eventEmitter.on(Event_2.GameFlowEvent.RenderGameScene, function () {
                            application.stage.removeChildren();
                            GameScene_1.GameScene.draw();
                        });
                        eventEmitter.on(Event_2.GameFlowEvent.RenderPaintingInfoScene, function () {
                            application.stage.removeChildren();
                            PaintingInfoScene_1.PaintingInfoScene.draw();
                        });
                        eventEmitter.on(Event_2.GameFlowEvent.NextLevelRequest, function () {
                            application.stage.removeChildren();
                            console.log('!!!!');
                            var param = location.search;
                            if (param.indexOf('level=2') > -1) {
                                window.history.pushState('', '', '?level=3');
                            }
                            if (param.indexOf('level=3') > -1) {
                                window.history.pushState('', '', '?level=1');
                            }
                            if (param.indexOf('level=1') > -1) {
                                window.history.pushState('', '', '?level=2');
                            }
                            GameScene_1.GameScene.draw();
                        });
                    });
                    Loader_1.Loader.load();
                    this.onResize();
                    window.onresize = this.onResize;
                };
                Main.prototype.onResize = function () {
                    var w = window.innerWidth;
                    var h = window.innerHeight;
                    var scale = Math.min(w / 1440, h / 899);
                    exports_1("canvasScale", canvasScale = scale);
                    application.view.style.left = (w - scale * 1440) / 2 + "px";
                    application.view.style.top = (h - scale * 899) / 2 + "px";
                    exports_1("canvasWidth", canvasWidth = 1440);
                    exports_1("canvasHeight", canvasHeight = 899);
                    application.view.style.width = scale * 1440 + "px";
                    application.view.style.height = scale * 899 + "px";
                };
                return Main;
            }());
            exports_1("Main", Main);
        }
    };
});
