System.register([], function (exports_1, context_1) {
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
    var Container, Point, LinkedLine;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Container = PIXI.Container;
            Point = PIXI.Point;
            LinkedLine = (function (_super) {
                __extends(LinkedLine, _super);
                function LinkedLine() {
                    var _this = _super.call(this) || this;
                    _this.x = 175;
                    _this.y = 20;
                    return _this;
                }
                Object.defineProperty(LinkedLine, "instance", {
                    get: function () {
                        if (this._instance == null) {
                            this._instance = new LinkedLine();
                        }
                        return this._instance;
                    },
                    enumerable: true,
                    configurable: true
                });
                LinkedLine.prototype.drawPath = function (paths) {
                    var _this = this;
                    this.removeChildren();
                    var point = paths.path_Detail.pop();
                    var gt = new PIXI.Graphics();
                    gt.lineStyle(5, 0xff0000);
                    var start = this.getPositionFromPoint(point);
                    gt.moveTo(start.x, start.y);
                    do {
                        point = paths.path_Detail.pop();
                        var line = this.getPositionFromPoint(point);
                        gt.lineTo(line.x, line.y);
                    } while (paths.path_Detail.length > 0);
                    this.addChild(gt);
                    setTimeout(function () { _this.removeChildren(); }, 500);
                };
                LinkedLine.prototype.getPositionFromPoint = function (point) {
                    var x = (45 + 20) * point.x + 22.5;
                    var y = (45 + 6) * point.y + 22.5;
                    if (y < 0) {
                        y = -5;
                    }
                    if (y > 502) {
                        y = 510;
                    }
                    return new Point(x, y);
                };
                return LinkedLine;
            }(Container));
            exports_1("LinkedLine", LinkedLine);
        }
    };
});
