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
    var ButtonBase_1, Main_1, Event_1, CheckAnsBtn;
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
            CheckAnsBtn = (function (_super) {
                __extends(CheckAnsBtn, _super);
                function CheckAnsBtn() {
                    var _this = _super.call(this, 'check_ans_btn', 'check_ans_btn', 1259, 841) || this;
                    _this.isClicked = false;
                    var checkAnsText = new PIXI.Text("確定答案", {
                        fontSize: 21,
                        fontFamily: 'PingFangTC',
                        fill: '#fff',
                        align: 'center'
                    });
                    checkAnsText.x = -41;
                    checkAnsText.y = -13;
                    _this.addChild(checkAnsText);
                    _this.interactive = false;
                    Main_1.eventEmitter.on(Event_1.GameFlowEvent.GameEndWithTimeout, function () {
                        _this.interactive = true;
                    });
                    return _this;
                }
                CheckAnsBtn.prototype.trigger = function () {
                    Main_1.eventEmitter.emit(Event_1.GameFlowEvent.CheckAnsRequest);
                };
                return CheckAnsBtn;
            }(ButtonBase_1.ButtonBase));
            exports_1("CheckAnsBtn", CheckAnsBtn);
        }
    };
});
