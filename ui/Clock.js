System.register(["../core/Loader", "../Main", "../core/Event"], function (exports_1, context_1) {
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
    var Container, Loader_1, Main_1, Event_1, Clock;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Loader_1_1) {
                Loader_1 = Loader_1_1;
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
            Clock = (function (_super) {
                __extends(Clock, _super);
                function Clock() {
                    var _this = _super.call(this) || this;
                    _this.starList = [];
                    _this.remainTimes = 480;
                    _this.x = 18;
                    _this.y = 17;
                    _this.addChild(PIXI.Sprite.from(Loader_1.Loader.resources['Button'].textures['Clock']));
                    Main_1.eventEmitter.on(Event_1.GameFlowEvent.CreateNewGameRequest, function () {
                        _this.remainTimes = 480;
                        _this.remainText.text = "8:00";
                    });
                    _this.remainText = new PIXI.Text("8:00", {
                        fontWeight: 'bold',
                        fontSize: 20,
                        fontFamily: 'Arial',
                        fill: '#75C6ED',
                        align: 'center',
                        stroke: '#FFFFFF',
                        strokeThickness: 6
                    });
                    _this.remainText.x = 36;
                    _this.addChild(_this.remainText);
                    _this.clockInterval = setInterval(_this.updateTime.bind(_this), 1000);
                    return _this;
                }
                Clock.prototype.updateTime = function () {
                    this.remainTimes--;
                    if (this.remainTimes == 0) {
                        clearInterval(this.clockInterval);
                        Main_1.eventEmitter.emit(Event_1.GameFlowEvent.GameEndWithTimeout);
                    }
                    this.remainText.text = Math.floor(this.remainTimes / 60) + ':' + ((this.remainTimes % 60 < 10) ? "0" : "") + this.remainTimes % 60;
                };
                return Clock;
            }(Container));
            exports_1("Clock", Clock);
        }
    };
});
