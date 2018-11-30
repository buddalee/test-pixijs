System.register(["../Main", "../core/Event", "../core/Loader", "./NextLevelBtn", "./SeePaintingBtn"], function (exports_1, context_1) {
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
    var Container, Main_1, Event_1, Loader_1, NextLevelBtn_1, SeePaintingBtn_1, Dialog;
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
            },
            function (NextLevelBtn_1_1) {
                NextLevelBtn_1 = NextLevelBtn_1_1;
            },
            function (SeePaintingBtn_1_1) {
                SeePaintingBtn_1 = SeePaintingBtn_1_1;
            }
        ],
        execute: function () {
            Container = PIXI.Container;
            Dialog = (function (_super) {
                __extends(Dialog, _super);
                function Dialog() {
                    var _this = _super.call(this) || this;
                    _this.interactive = false;
                    _this.visible = false;
                    var gt = new PIXI.Graphics();
                    gt.beginFill(0x333333, 0.3);
                    gt.drawRect(0, 0, 1440, 899);
                    gt.endFill();
                    _this.addChild(gt);
                    var dialog = PIXI.Sprite.from(Loader_1.Loader.resources["dialog"].texture);
                    dialog.x = 394;
                    dialog.y = 250;
                    _this.addChild(dialog);
                    _this.addChild(new NextLevelBtn_1.NextLevelBtn());
                    _this.addChild(new SeePaintingBtn_1.SeePaintingBtn());
                    Main_1.eventEmitter.on(Event_1.GameFlowEvent.CheckAnsIsRightResponse, function () {
                        _this.handleMessage(1);
                        _this.visible = true;
                    });
                    Main_1.eventEmitter.on(Event_1.GameFlowEvent.CheckAnsIsWrongResponse, function () {
                        _this.handleMessage(2);
                        _this.visible = true;
                    });
                    return _this;
                }
                Dialog.prototype.trigger = function () {
                };
                Dialog.prototype.handleMessage = function (type) {
                    if (this.dialogText) {
                        this.removeChild(this.dialogText);
                    }
                    if (type === 1) {
                        this.message = '  恭喜你 \n 挑戰成功';
                    }
                    else {
                        this.message = '  很可惜 \n 挑戰失敗';
                    }
                    this.dialogText = new PIXI.Text(this.message, {
                        fontSize: 32,
                        fontFamily: 'PingFangTC',
                        fill: '#d0021b',
                        align: 'center'
                    });
                    this.dialogText.x = 585;
                    this.dialogText.y = 298;
                    this.addChild(this.dialogText);
                };
                return Dialog;
            }(Container));
            exports_1("Dialog", Dialog);
        }
    };
});
