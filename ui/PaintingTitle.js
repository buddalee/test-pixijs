System.register(["../core/Loader", "../core/Stamps"], function (exports_1, context_1) {
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
    var Container, Loader_1, Stamps_1, PaintingTitle;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Loader_1_1) {
                Loader_1 = Loader_1_1;
            },
            function (Stamps_1_1) {
                Stamps_1 = Stamps_1_1;
            }
        ],
        execute: function () {
            Container = PIXI.Container;
            PaintingTitle = (function (_super) {
                __extends(PaintingTitle, _super);
                function PaintingTitle() {
                    var _this = _super.call(this) || this;
                    _this.interactive = true;
                    _this.visible = true;
                    var painting = PIXI.Sprite.from(Loader_1.Loader.resources["painting_name"].texture);
                    painting.x = 1094;
                    painting.y = 23;
                    _this.addChild(painting);
                    console.log('paintingInfos ', Stamps_1.paintingInfos);
                    var param = location.search;
                    var levelNumber = 1;
                    if (param.indexOf('level=2') > -1) {
                        levelNumber = 2;
                    }
                    if (param.indexOf('level=3') > -1) {
                        levelNumber = 3;
                    }
                    if (param.indexOf('level=1') > -1) {
                        levelNumber = 1;
                    }
                    var info = Stamps_1.paintingInfos[levelNumber - 1];
                    var paintingName = info.ArticleSubject;
                    _this.paintingText = new PIXI.Text(paintingName, {
                        fontSize: 24,
                        fontFamily: 'PingFangTC',
                        fill: '#4a4a4a',
                        align: 'center'
                    });
                    _this.paintingText.x = 1125;
                    _this.paintingText.y = 43;
                    _this.addChild(_this.paintingText);
                    return _this;
                }
                PaintingTitle.prototype.trigger = function () {
                };
                return PaintingTitle;
            }(Container));
            exports_1("PaintingTitle", PaintingTitle);
        }
    };
});
