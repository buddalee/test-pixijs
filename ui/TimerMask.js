System.register(["../Main", "../core/Event", "../core/Loader"], function (exports_1, context_1) {
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
    var Container, Main_1, Event_1, Loader_1, TimerMask;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Main_1_1) {
                Main_1 = Main_1_1;
            },
            function (Event_1_1) {
                Event_1 = Event_1_1;
            },
            function (Loader_1_1) {
                Loader_1 = Loader_1_1;
            }
        ],
        execute: function () {
            Container = PIXI.Container;
            TimerMask = (function (_super) {
                __extends(TimerMask, _super);
                function TimerMask() {
                    var _this = _super.call(this) || this;
                    _this.remainTimes = 5;
                    _this.interactive = true;
                    _this.visible = true;
                    Main_1.eventEmitter.on(Event_1.GameFlowEvent.GameEndWithTimeout, function () {
                        _this.visible = false;
                    });
                    var gt = new PIXI.Graphics();
                    gt.beginFill(0x333333, 0.2);
                    gt.drawRect(0, 0, 1080, 899);
                    gt.endFill();
                    _this.addChild(gt);
                    var timer = PIXI.Sprite.from(Loader_1.Loader.resources["timer_bg"].texture);
                    timer.x = 483;
                    timer.y = 349;
                    _this.addChild(timer);
                    Main_1.eventEmitter.on(Event_1.GameFlowEvent.CreateNewGameRequest, function () {
                        _this.remainTimes = 5;
                        _this.remainText.text = "5";
                    });
                    _this.remainText = new PIXI.Text("5", {
                        fontWeight: 'bold',
                        fontSize: 60,
                        fontFamily: 'PingFangTC',
                        fill: '#fff',
                        align: 'center',
                    });
                    _this.remainText.x = 521;
                    _this.remainText.y = 370;
                    _this.addChild(_this.remainText);
                    _this.clockInterval = setInterval(_this.updateTime.bind(_this), 1000);
                    return _this;
                }
                TimerMask.prototype.updateTime = function () {
                    this.remainTimes--;
                    if (this.remainTimes == 0) {
                        clearInterval(this.clockInterval);
                        Main_1.eventEmitter.emit(Event_1.GameFlowEvent.GameEndWithTimeout);
                    }
                    this.remainText.text = this.remainTimes.toString();
                };
                TimerMask.prototype.trigger = function () {
                };
                return TimerMask;
            }(Container));
            exports_1("TimerMask", TimerMask);
        }
    };
});
