System.register(["../core/Loader", "./GameBoard", "../Main", "../core/Event"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        }
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var Container, Loader_1, GameBoard_1, Main_1, Event_1, Stars;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Loader_1_1) {
                Loader_1 = Loader_1_1;
            },
            function (GameBoard_1_1) {
                GameBoard_1 = GameBoard_1_1;
            },
            function (Main_1_1) {
                Main_1 = Main_1_1;
            },
            function (Event_1_1) {
                Event_1 = Event_1_1;
            }
        ],
        execute: function () {
            Container = PIXI.Container;
            Stars = (function (_super) {
                __extends(Stars, _super);
                function Stars() {
                    var _this = _super.call(this) || this;
                    _this.starList = [];
                    _this.updateStarStatus = function () {
                        _this.removeChildren();
                        for (var i = 0; i < 3; i++) {
                            var star = void 0;
                            if (i < GameBoard_1.reloadTimes) {
                                star = PIXI.Sprite.from(Loader_1.Loader.resources['Button'].textures['Star_Full']);
                            }
                            else {
                                star = PIXI.Sprite.from(Loader_1.Loader.resources['Button'].textures['Star_Empty']);
                            }
                            star.x = i * 33;
                            _this.starList.push(star);
                            _this.addChild(star);
                        }
                    };
                    _this.x = 20;
                    _this.y = 78;
                    _this.updateStarStatus();
                    Main_1.eventEmitter.on(Event_1.GameFlowEvent.ReloadBoardRequest, _this.updateStarStatus.bind(_this));
                    Main_1.eventEmitter.on(Event_1.GameFlowEvent.BoardNeedReload, _this.updateStarStatus.bind(_this));
                    Main_1.eventEmitter.on(Event_1.GameFlowEvent.CreateNewGameRequest, _this.updateStarStatus.bind(_this));
                    return _this;
                }
                return Stars;
            }(Container));
            exports_1("Stars", Stars);
        }
    };
});
