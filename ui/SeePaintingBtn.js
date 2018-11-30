System.register(["./ButtonBase", "../Main", "../core/Event"], function (exports_1, context_1) {
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
    var ButtonBase_1, Main_1, Event_1, SeePaintingBtn;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (ButtonBase_1_1) {
                ButtonBase_1 = ButtonBase_1_1;
            },
            function (Main_1_1) {
                Main_1 = Main_1_1;
            },
            function (Event_1_1) {
                Event_1 = Event_1_1;
            }
        ],
        execute: function () {
            SeePaintingBtn = (function (_super) {
                __extends(SeePaintingBtn, _super);
                function SeePaintingBtn() {
                    var _this = _super.call(this, 'next_level_btn', 'next_level_btn', 750, 435) || this;
                    _this.isClicked = false;
                    _this.isAnsCorrect = false;
                    var checkAnsText = new PIXI.Text("賞畫去", {
                        fontSize: 21,
                        fontFamily: 'PingFangTC',
                        fill: '#fff',
                        align: 'center'
                    });
                    checkAnsText.x = -34;
                    checkAnsText.y = -13;
                    _this.addChild(checkAnsText);
                    return _this;
                }
                SeePaintingBtn.prototype.trigger = function () {
                    this.handleAnsCorrect();
                };
                SeePaintingBtn.prototype.handleAnsCorrect = function () {
                    this.isAnsCorrect = true;
                    Main_1.eventEmitter.emit(Event_1.GameFlowEvent.ShowAnsCorrect);
                    Main_1.eventEmitter.emit(Event_1.GameFlowEvent.RenderPaintingInfoScene);
                };
                return SeePaintingBtn;
            }(ButtonBase_1.ButtonBase));
            exports_1("SeePaintingBtn", SeePaintingBtn);
        }
    };
});
