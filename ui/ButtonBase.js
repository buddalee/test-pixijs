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
    var Sprite, Loader_1, ButtonBase;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Loader_1_1) {
                Loader_1 = Loader_1_1;
            }
        ],
        execute: function () {
            Sprite = PIXI.Sprite;
            ButtonBase = (function (_super) {
                __extends(ButtonBase, _super);
                function ButtonBase(_id, textureID, _x, _y) {
                    var _this = _super.call(this) || this;
                    _this._enable = true;
                    if (textureID === 'introduce_btn') {
                        _this.texture = PIXI.Sprite.fromImage("assets/introduce_btn.png").texture;
                    }
                    else if (textureID === 'start_game_btn') {
                        _this.texture = PIXI.Sprite.fromImage("assets/start_game_btn.png").texture;
                    }
                    else if (textureID === 'check_ans_btn') {
                        _this.texture = PIXI.Sprite.fromImage("assets/btn-normal-m.png").texture;
                    }
                    else if (textureID === 'next_level_btn') {
                        _this.texture = PIXI.Sprite.fromImage("assets/btn-normal-s.png").texture;
                    }
                    else {
                        console.log('Loader.resources[_id]: ', Loader_1.Loader.resources);
                        _this.texture = Loader_1.Loader.resources[_id].textures[textureID];
                    }
                    _this.interactive = true;
                    _this.buttonMode = true;
                    _this.x = _x;
                    _this.y = _y;
                    _this.anchor.set(0.5);
                    _this.on("mousedown", _this.mouseDownEffect.bind(_this));
                    _this.on("mouseup", _this.mouseUpEffect.bind(_this));
                    _this.on("mouseout", _this.mouseOutEffect.bind(_this));
                    _this.on("touchstart", _this.mouseDownEffect.bind(_this));
                    _this.on("touchend", _this.mouseUpEffect.bind(_this));
                    _this.on("mouseup", _this.trigger.bind(_this));
                    _this.on("touchend", _this.trigger.bind(_this));
                    return _this;
                }
                ButtonBase.prototype.trigger = function () {
                };
                Object.defineProperty(ButtonBase.prototype, "enable", {
                    set: function (v) {
                        this.interactive = v;
                        this.buttonMode = v;
                        this.alpha = v ? 1 : 0.5;
                    },
                    enumerable: true,
                    configurable: true
                });
                ButtonBase.prototype.mouseDownEffect = function () {
                    var animTweenTimeline = new TimelineMax();
                    animTweenTimeline.add(new TweenLite(this, 0.2, {
                        "scaleX": 0.9,
                        "scaleY": 0.9
                    }));
                    animTweenTimeline.play();
                };
                ButtonBase.prototype.mouseUpEffect = function () {
                    var animTweenTimeline = new TimelineMax();
                    animTweenTimeline.add(new TweenLite(this, 0.1, {
                        "scaleX": 1.1,
                        "scaleY": 1.1
                    }));
                    animTweenTimeline.add(new TweenLite(this, 0.1, {
                        "scaleX": 1,
                        "scaleY": 1
                    }));
                    animTweenTimeline.play();
                };
                Object.defineProperty(ButtonBase.prototype, "scaleX", {
                    set: function (v) {
                        this.scale.x = v;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ButtonBase.prototype, "scaleY", {
                    set: function (v) {
                        this.scale.y = v;
                    },
                    enumerable: true,
                    configurable: true
                });
                ButtonBase.prototype.mouseOutEffect = function () {
                    this.scale.set(1, 1);
                };
                return ButtonBase;
            }(Sprite));
            exports_1("ButtonBase", ButtonBase);
        }
    };
});
