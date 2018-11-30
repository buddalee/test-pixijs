System.register(["../core/Loader"], function (exports_1, context_1) {
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
    var Sprite, Loader_1, GameIcon;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Loader_1_1) {
                Loader_1 = Loader_1_1;
            }
        ],
        execute: function () {
            Sprite = PIXI.Sprite;
            GameIcon = (function (_super) {
                __extends(GameIcon, _super);
                function GameIcon(id, x, y) {
                    var _this = _super.call(this) || this;
                    _this.select = function () {
                        var gt = new PIXI.Graphics();
                        gt.lineStyle(3, 0xFF0000, 1);
                        gt.drawRect(-3 - 22.5, -3 - 22.5, 51, 51);
                        gt.endFill();
                        _this.addChild(gt);
                    };
                    _this.unSelect = function () {
                        _this.removeChildren();
                    };
                    _this.texture = Loader_1.Loader.resources['Icon'].textures['icon_' + id];
                    _this.name = 'icon_' + x + "_" + y;
                    _this.width = _this.height = 45;
                    _this.x = (_this.width + 20) * x + 22.5;
                    _this.y = (_this.width + 6) * y + 22.5;
                    _this.anchor.set(0.5);
                    _this.buttonMode = true;
                    _this.interactive = true;
                    return _this;
                }
                return GameIcon;
            }(Sprite));
            exports_1("GameIcon", GameIcon);
        }
    };
});
