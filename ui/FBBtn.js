System.register(["./ButtonBase"], function (exports_1, context_1) {
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
    var ButtonBase_1, FBBtn;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (ButtonBase_1_1) {
                ButtonBase_1 = ButtonBase_1_1;
            }
        ],
        execute: function () {
            FBBtn = (function (_super) {
                __extends(FBBtn, _super);
                function FBBtn() {
                    var _this = _super.call(this, 'Button', 'FB', 1118, 805) || this;
                    _this._location = location;
                    return _this;
                }
                FBBtn.prototype.trigger = function () {
                    window.open("https://www.facebook.com/sharer/sharer.php?u=" + this._location.href, 'Budda Lee');
                };
                return FBBtn;
            }(ButtonBase_1.ButtonBase));
            exports_1("FBBtn", FBBtn);
        }
    };
});
