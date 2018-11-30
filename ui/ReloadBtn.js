System.register(["./ButtonBase", "../Main", "../core/Event", "./GameBoard"], function (exports_1, context_1) {
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
    var ButtonBase_1, Main_1, Event_1, GameBoard_1, ReloadBtn;
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
            },
            function (GameBoard_1_1) {
                GameBoard_1 = GameBoard_1_1;
            }
        ],
        execute: function () {
            ReloadBtn = (function (_super) {
                __extends(ReloadBtn, _super);
                function ReloadBtn() {
                    var _this = _super.call(this, 'Button', 'Reflash', 50, 230) || this;
                    Main_1.eventEmitter.on(Event_1.GameFlowEvent.GameRoundStart, (function () {
                        _this.enable = true;
                    }).bind(_this));
                    return _this;
                }
                ReloadBtn.prototype.trigger = function () {
                    if (GameBoard_1.reloadTimes > 0) {
                        Main_1.eventEmitter.emit(Event_1.GameFlowEvent.ReloadBoardRequest);
                    }
                    if (GameBoard_1.reloadTimes == 0) {
                        this.enable = false;
                    }
                };
                return ReloadBtn;
            }(ButtonBase_1.ButtonBase));
            exports_1("ReloadBtn", ReloadBtn);
        }
    };
});
