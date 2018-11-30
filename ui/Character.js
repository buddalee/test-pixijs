System.register(["../core/Loader", "../Main", "../core/Event"], function (exports_1, context_1) {
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
    var Container, Loader_1, Main_1, Event_1, Character;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Loader_1_1) {
                Loader_1 = Loader_1_1;
            },
            function (Main_1_1) {
                Main_1 = Main_1_1;
            },
            function (Event_1_1) {
                Event_1 = Event_1_1;
            }
        ],
        execute: function () {
            Container = PIXI.Container;
            Character = (function (_super) {
                __extends(Character, _super);
                function Character() {
                    var _this = _super.call(this) || this;
                    _this.shouldPlayTarget = 'idle';
                    _this.idle = _this.createAnim('Character_Idle', _this.playAnim.bind(_this));
                    _this.jump = _this.createAnim('Character_Jump', _this.playAnim.bind(_this));
                    _this.jump.x = -14;
                    _this.laugh = _this.createAnim('Character_Laugh', _this.playAnim.bind(_this));
                    _this.laugh.x = -17;
                    _this.playAnim();
                    _this.x = 30;
                    _this.y = 467;
                    Main_1.eventEmitter.on(Event_1.GameFlowEvent.LinkedLineSuccess, function () {
                        _this.shouldPlayTarget = 'laugh';
                    });
                    Main_1.eventEmitter.on(Event_1.GameFlowEvent.TipsRequest, function () {
                        _this.shouldPlayTarget = 'jump';
                    });
                    return _this;
                }
                Character.prototype.playAnim = function () {
                    this.idle.visible = false;
                    this.laugh.visible = false;
                    this.jump.visible = false;
                    this[this.shouldPlayTarget].visible = true;
                    this[this.shouldPlayTarget].gotoAndPlay(0);
                    this.shouldPlayTarget = 'idle';
                };
                Character.prototype.createAnim = function (id, onComplete) {
                    var anim = Loader_1.Loader.resources[id].textures;
                    var textures = [];
                    for (var index in anim) {
                        textures.push(anim[index]);
                    }
                    var character = new PIXI.extras.AnimatedSprite(textures);
                    character.play();
                    character.animationSpeed = 0.25;
                    character.loop = false;
                    character.onComplete = onComplete;
                    this.addChild(character);
                    return character;
                };
                return Character;
            }(Container));
            exports_1("Character", Character);
        }
    };
});
