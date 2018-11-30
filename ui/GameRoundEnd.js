System.register(["../Main", "../core/Event"], function (exports_1, context_1) {
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
    var Container, Main_1, Event_1, GameRoundEnd;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Main_1_1) {
                Main_1 = Main_1_1;
            },
            function (Event_1_1) {
                Event_1 = Event_1_1;
            }
        ],
        execute: function () {
            Container = PIXI.Container;
            GameRoundEnd = (function (_super) {
                __extends(GameRoundEnd, _super);
                function GameRoundEnd() {
                    var _this = _super.call(this) || this;
                    _this.interactive = true;
                    _this.visible = false;
                    Main_1.eventEmitter.on(Event_1.GameFlowEvent.GameEndWithTimeout, function () {
                        _this.text.text = "Time is up!";
                        _this.text.x = 260;
                        _this.text.y = 200;
                        _this.visible = true;
                    });
                    Main_1.eventEmitter.on(Event_1.GameFlowEvent.GameEndWithNoPath, function () {
                        _this.text.text = "Game over";
                        _this.text.x = 260;
                        _this.text.y = 200;
                        _this.visible = true;
                    });
                    Main_1.eventEmitter.on(Event_1.GameFlowEvent.GamePass, function () {
                        _this.text.text = "Congratulations! \nYou passed!";
                        _this.text.x = 210;
                        _this.text.y = 200;
                        _this.visible = true;
                    });
                    var gt = new PIXI.Graphics();
                    gt.beginFill(0x000000, 0.9);
                    gt.drawRect(0, 0, 860, 540);
                    gt.endFill();
                    _this.addChild(gt);
                    _this.text = new PIXI.Text("Congratulations! \nYou passed!", {
                        fontWeight: 'bold',
                        fontSize: 60,
                        fontFamily: 'Arial',
                        fill: '#ff0000',
                        align: 'center',
                        stroke: '#FFFFFF',
                        strokeThickness: 3
                    });
                    _this.addChild(_this.text);
                    var btn = new PIXI.Graphics();
                    btn.beginFill(0x75C7ED);
                    btn.drawRoundedRect(700, 480, 115, 35, 10);
                    btn.endFill();
                    btn.buttonMode = true;
                    btn.interactive = true;
                    btn.on("mouseup", _this.trigger.bind(_this));
                    btn.on("touchend", _this.trigger.bind(_this));
                    _this.addChild(btn);
                    var newGame = new PIXI.Text("New Game", {
                        fontWeight: 'bold',
                        fontSize: 20,
                        fontFamily: 'Arial',
                        fill: '#75C6ED',
                        align: 'center',
                        stroke: '#FFFFFF',
                        strokeThickness: 6
                    });
                    newGame.x = 705;
                    newGame.y = 483;
                    _this.addChild(newGame);
                    return _this;
                }
                GameRoundEnd.prototype.trigger = function () {
                    Main_1.eventEmitter.emit(Event_1.GameFlowEvent.CreateNewGameRequest);
                    this.visible = false;
                };
                return GameRoundEnd;
            }(Container));
            exports_1("GameRoundEnd", GameRoundEnd);
        }
    };
});
