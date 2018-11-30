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
    var ButtonBase_1, Main_1, Event_1, ContinueBtn;
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
            ContinueBtn = (function (_super) {
                __extends(ContinueBtn, _super);
                function ContinueBtn() {
                    var _this = _super.call(this, 'check_ans_btn', 'check_ans_btn', 1263, 866) || this;
                    var checkAnsText = new PIXI.Text("繼續挑戰", {
                        fontSize: 21,
                        fontFamily: 'PingFangTC',
                        fill: '#fff',
                        align: 'center'
                    });
                    checkAnsText.x = -41;
                    checkAnsText.y = -13;
                    _this.addChild(checkAnsText);
                    return _this;
                }
                ContinueBtn.prototype.trigger = function () {
                    Main_1.eventEmitter.emit(Event_1.GameFlowEvent.NextLevelRequest);
                };
                return ContinueBtn;
            }(ButtonBase_1.ButtonBase));
            exports_1("ContinueBtn", ContinueBtn);
        }
    };
});
