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
    var Container, Main_1, Event_1, Loader_1, ChooseStamp2Btn;
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
            ChooseStamp2Btn = (function (_super) {
                __extends(ChooseStamp2Btn, _super);
                function ChooseStamp2Btn() {
                    var _this = _super.call(this) || this;
                    _this.isClicked = false;
                    _this.interactive = true;
                    _this.visible = true;
                    _this.buttonMode = true;
                    _this.gt = new PIXI.Graphics();
                    _this.gt.beginFill(0xf5a623, 0.3);
                    _this.gt.drawRect(1260, 180, 151, 85);
                    _this.gt.endFill();
                    _this.addChild(_this.gt);
                    if (!_this.isClicked) {
                        _this.gt.visible = false;
                    }
                    else {
                        _this.gt.visible = true;
                    }
                    var stamp1 = PIXI.Sprite.from(Loader_1.Loader.resources["stamp2_icon"].texture);
                    stamp1.x = 1340;
                    stamp1.y = 197;
                    stamp1.width = 50;
                    stamp1.height = 50;
                    _this.addChild(stamp1);
                    var mouseStamp = PIXI.Sprite.from(Loader_1.Loader.resources["mouse_stamp"].texture);
                    mouseStamp.x = 1278;
                    mouseStamp.y = 197;
                    mouseStamp.width = 50;
                    mouseStamp.height = 50;
                    _this.addChild(mouseStamp);
                    _this.on("mouseup", _this.trigger.bind(_this));
                    _this.on("touchend", _this.trigger.bind(_this));
                    Main_1.eventEmitter.on(Event_1.GameFlowEvent.chooseStamp1Request, function () {
                        _this.isClicked = false;
                        _this.gt.visible = false;
                    });
                    return _this;
                }
                ChooseStamp2Btn.prototype.trigger = function () {
                    Main_1.eventEmitter.emit(Event_1.GameFlowEvent.chooseStamp2Request);
                    this.gt.visible = true;
                };
                ChooseStamp2Btn.prototype.handleClick = function () {
                    console.log('this.isClicked: ', this.isClicked);
                    if (!this.isClicked) {
                        this.gt.visible = false;
                    }
                    else {
                        this.gt.visible = true;
                    }
                };
                return ChooseStamp2Btn;
            }(Container));
            exports_1("ChooseStamp2Btn", ChooseStamp2Btn);
        }
    };
});
