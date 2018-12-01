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
    var ButtonBase_1, Main_1, Event_1, IntroduceBtn1;
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
            IntroduceBtn1 = (function (_super) {
                __extends(IntroduceBtn1, _super);
                function IntroduceBtn1() {
                    return _super.call(this, 'StartGame_Button', 'start_game_btn', 760, 794) || this;
                }
                IntroduceBtn1.prototype.trigger = function () {
                    Main_1.eventEmitter.emit(Event_1.GameFlowEvent.RenderGameScene);
                };
                return IntroduceBtn1;
            }(ButtonBase_1.ButtonBase));
            exports_1("IntroduceBtn1", IntroduceBtn1);
        }
    };
});
