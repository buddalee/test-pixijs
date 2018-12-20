System.register(["../core/Loader", "../Main", "../core/Event", "./TimerMask"], function (exports_1, context_1) {
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
    var Container, Loader_1, Point, Main_1, Event_1, TimerMask_1, reloadTimes, StampGameBoard;
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
            },
            function (TimerMask_1_1) {
                TimerMask_1 = TimerMask_1_1;
            }
        ],
        execute: function () {
            Container = PIXI.Container;
            Point = PIXI.Point;
            exports_1("reloadTimes", reloadTimes = 3);
            StampGameBoard = (function (_super) {
                __extends(StampGameBoard, _super);
                function StampGameBoard() {
                    var _this = _super.call(this) || this;
                    _this.select1 = new Point(-1, -1);
                    _this.select2 = new Point(-1, -1);
                    _this.selected = false;
                    _this.pathHistory = [];
                    _this.valueHistory = [];
                    _this.ansPoint1 = { x: 0, y: 0 };
                    _this.ansPoint2 = { x: 0, y: 0 };
                    _this.chooseStampType = 1;
                    _this.touches = [];
                    _this.centerPointArr = [{ x: 0, y: 0 }, { x: 0, y: 0 }];
                    _this.angle = 0;
                    _this.userAnsArr = [];
                    _this.tempDatas = [];
                    _this.onDragStart = function (e) {
                        var eventData = e.data;
                        _this.touchData = {
                            x: Math.floor(eventData.global.x),
                            y: Math.floor(eventData.global.y)
                        };
                        if (!_this.isPCMode) {
                            var touch = {
                                id: eventData.identifier,
                                pos: _this.touchData
                            };
                            _this.touches.push(touch);
                            _this.tempDatas.push(touch);
                            if (_this.touches.length === 1) {
                                _this.testCircle1 = new PIXI.Graphics();
                                if (_this.isDevMode) {
                                    _this.testCircle1.beginFill(0x99ffff);
                                }
                                else {
                                    _this.testCircle1.beginFill(0x99ffff, 0);
                                }
                                _this.testCircle1.drawCircle(touch.pos.x, touch.pos.y, 10);
                                _this.testCircle1.endFill();
                                _this.addChild(_this.testCircle1);
                            }
                            if (_this.touches.length === 2) {
                                _this.testCircle2 = new PIXI.Graphics();
                                if (_this.isDevMode) {
                                    _this.testCircle2.beginFill(0x99ffff);
                                }
                                else {
                                    _this.testCircle2.beginFill(0x99ffff, 0);
                                }
                                _this.testCircle2.drawCircle(touch.pos.x, touch.pos.y, 10);
                                _this.testCircle2.endFill();
                                _this.addChild(_this.testCircle2);
                            }
                            if (_this.touches.length === 3) {
                                _this.testCircle3 = new PIXI.Graphics();
                                if (_this.isDevMode) {
                                    _this.testCircle3.beginFill(0x99ffff);
                                }
                                else {
                                    _this.testCircle3.beginFill(0x99ffff, 0);
                                }
                                _this.testCircle3.drawCircle(touch.pos.x, touch.pos.y, 10);
                                _this.testCircle3.endFill();
                                _this.addChild(_this.testCircle3);
                            }
                            _this.touchHandler();
                        }
                    };
                    _this.onDragEnd = function (e) {
                        console.log('目前有幾隻手指按在螢幕上: ', _this.touches.length);
                        var checksum = 0;
                        if (checksum === 0 && _this.touches.length > 5) {
                            checksum = _this.touches.length - 5;
                        }
                        if ((_this.touches.length - checksum) === 1) {
                            if (_this.tempDatas.length <= 3) {
                                _this.chooseStampType = 1;
                                Main_1.eventEmitter.emit(Event_1.GameFlowEvent.chooseStamp1Request);
                                _this.calcDistance(1);
                            }
                            else {
                                _this.chooseStampType = 2;
                                Main_1.eventEmitter.emit(Event_1.GameFlowEvent.chooseStamp2Request);
                                _this.calcDistance(2);
                            }
                        }
                        var eventData = e.data;
                        if (!_this.isPCMode) {
                            for (var i = 0; i < _this.touches.length; i++) {
                                if (_this.touches[i].id === eventData.identifier) {
                                    _this.touches.splice(i, 1);
                                }
                            }
                            ;
                        }
                        else {
                            _this.drawStamp(_this.touchData, true, _this.chooseStampType);
                        }
                    };
                    _this.calcDistance = function (type) {
                        var dis = _this.tempDatas.map(function (_touch, idx) {
                            var anotherIdx;
                            if (idx === _this.tempDatas.length - 1) {
                                anotherIdx = 0;
                            }
                            else {
                                anotherIdx = idx + 1;
                            }
                            var _a = _this.tempDatas[idx].pos, x = _a.x, y = _a.y;
                            var _x = _this.tempDatas[anotherIdx].pos.x;
                            var _y = _this.tempDatas[anotherIdx].pos.y;
                            var distance = Math.sqrt(Math.pow(x - _x, 2) + Math.pow(y - _y, 2));
                            return distance;
                        });
                        var maxDistance = Math.max.apply(Math, dis);
                        var maxIdx = dis.findIndex(function (_dis) { return _dis === maxDistance; });
                        _this.calcPhotoCenter(maxIdx);
                        _this.calcPhotoAngle(maxIdx);
                        if (type === 1) {
                            _this.drawStamp(_this.centerPointArr[0], true, _this.chooseStampType);
                        }
                        else {
                            _this.drawStamp(_this.centerPointArr[1], true, _this.chooseStampType);
                        }
                        _this.touches = [];
                        _this.tempDatas = [];
                    };
                    _this.calcPhotoCenter = function (maxIdx) {
                        var anotherIdx;
                        if (maxIdx === _this.tempDatas.length - 1) {
                            anotherIdx = 0;
                        }
                        else {
                            anotherIdx = maxIdx + 1;
                        }
                        var _a = _this.tempDatas[maxIdx].pos, x = _a.x, y = _a.y;
                        var _x = _this.tempDatas[anotherIdx].pos.x;
                        var _y = _this.tempDatas[anotherIdx].pos.y;
                        _this.removeChild(_this.centerCircle);
                        _this.centerCircle = new PIXI.Graphics();
                        if (_this.isDevMode) {
                            _this.centerCircle.beginFill(0x00FF00);
                        }
                        else {
                            _this.centerCircle.beginFill(0x00FF00, 0);
                        }
                        if (_this.chooseStampType === 1) {
                            _this.centerPointArr[0].x = (x + _x) / 2;
                            _this.centerPointArr[0].y = (y + _y) / 2;
                            _this.centerCircle.drawCircle(_this.centerPointArr[0].x, _this.centerPointArr[0].y, 10);
                        }
                        else {
                            _this.centerPointArr[1].x = (x + _x) / 2;
                            _this.centerPointArr[1].y = (y + _y) / 2;
                            _this.centerCircle.drawCircle(_this.centerPointArr[1].x, _this.centerPointArr[1].y, 10);
                        }
                        _this.centerCircle.endFill();
                        _this.addChild(_this.centerCircle);
                    };
                    _this.calcPhotoAngle = function (maxIdx) {
                        var anotherIdx;
                        if (maxIdx === 0) {
                            anotherIdx = _this.tempDatas.length - 1;
                        }
                        else {
                            anotherIdx = maxIdx - 1;
                        }
                        var _a = _this.tempDatas[anotherIdx].pos, x = _a.x, y = _a.y;
                        var _x = _this.tempDatas[maxIdx].pos.x;
                        var _y = _this.tempDatas[maxIdx].pos.y;
                        var cX = _x - x;
                        var cY = _y - y;
                        var xrad = Math.atan2(cY, cX);
                        _this.angle = xrad / Math.PI * 180;
                        _this.angle = _this.angle;
                    };
                    _this.createNewGame = function () {
                        var param = location.search;
                        var levelNumber = 1;
                        if (param.indexOf('level=2') > -1) {
                            levelNumber = 2;
                        }
                        else if (param.indexOf('level=3') > -1) {
                            levelNumber = 3;
                        }
                        else if (param.indexOf('level=1') > -1) {
                            levelNumber = 1;
                        }
                        else {
                            levelNumber = 1;
                            window.history.pushState('', '', '?level=1');
                        }
                        _this.addChild(PIXI.Sprite.from(Loader_1.Loader.resources["level" + levelNumber].texture));
                        _this.createNewAnser();
                    };
                    _this.createNewAnser = function () {
                        if (_this.isDevMode) {
                            _this.drawLine();
                        }
                        _this.removeChild(_this.stampIcon1);
                        _this.removeChild(_this.stampIcon2);
                        var _a = Main_1.stamps.generateAnsPoint(), ansPoint1 = _a.ansPoint1, ansPoint2 = _a.ansPoint2;
                        _this.ansPoint1 = ansPoint1;
                        _this.ansPoint2 = ansPoint2;
                        _this.drawStamp(_this.ansPoint1, false, 1);
                        _this.drawStamp(_this.ansPoint2, false, 2);
                        _this.addChild(new TimerMask_1.TimerMask());
                        Main_1.eventEmitter.emit(Event_1.GameFlowEvent.GameRoundStart);
                    };
                    _this.drawStamp = function (point, isUserDraw, stampType) {
                        var xd = 1080 / 8;
                        var yd = 899 / 8;
                        var stampWidth = xd > yd ? yd : xd;
                        var centerCircle = new PIXI.Graphics();
                        if (_this.isDevMode) {
                            centerCircle.beginFill(0x00FF00);
                        }
                        else {
                            centerCircle.beginFill(0x00FF00, 0);
                        }
                        var texture;
                        if (isUserDraw) {
                            if (stampType === 1) {
                                _this.removeChild(_this.stampIcon1);
                            }
                            else {
                                _this.removeChild(_this.stampIcon2);
                            }
                        }
                        if (stampType === 1) {
                            _this.stampIcon1 = PIXI.Sprite.from(Loader_1.Loader.resources["stamp1_icon"].texture);
                            _this.stampIcon1.pivot.x = _this.stampIcon1.width / 2;
                            _this.stampIcon1.pivot.y = _this.stampIcon1.height / 2;
                            _this.stampIcon1.width = stampWidth;
                            _this.stampIcon1.height = stampWidth;
                            _this.stampIcon1.rotation = _this.angle * (Math.PI / 180);
                            _this.stampIcon1.x = point.x;
                            _this.stampIcon1.y = point.y;
                            _this.addChild(_this.stampIcon1);
                        }
                        else {
                            _this.stampIcon2 = PIXI.Sprite.from(Loader_1.Loader.resources["stamp2_icon"].texture);
                            _this.stampIcon2.pivot.x = _this.stampIcon2.width / 2;
                            _this.stampIcon2.pivot.y = _this.stampIcon2.height / 2;
                            _this.stampIcon2.width = stampWidth;
                            _this.stampIcon2.height = stampWidth;
                            _this.stampIcon2.rotation = _this.angle * (Math.PI / 180);
                            _this.stampIcon2.x = point.x;
                            _this.stampIcon2.y = point.y;
                            _this.addChild(_this.stampIcon2);
                        }
                        if (isUserDraw) {
                            if (stampType === 1) {
                                _this.userAnsArr[0] = point;
                            }
                            else {
                                _this.userAnsArr[1] = point;
                            }
                        }
                        centerCircle.drawCircle(point.x, point.y, 10);
                        _this.addChild(centerCircle);
                    };
                    _this.drawLine = function () {
                        var xd = 1080 / 8;
                        var yd = 899 / 8;
                        var lines1 = new PIXI.Graphics();
                        lines1.lineStyle(4, 0x000000, 1);
                        lines1.moveTo(0, 2 * yd);
                        lines1.lineTo(1080, 2 * yd);
                        var lines2 = new PIXI.Graphics();
                        lines2.lineStyle(4, 0x000000, 1);
                        lines2.moveTo(0, 4 * yd);
                        lines2.lineTo(1080, 4 * yd);
                        var lines3 = new PIXI.Graphics();
                        lines3.lineStyle(4, 0x000000, 1);
                        lines3.moveTo(0, 6 * yd);
                        lines3.lineTo(1080, 6 * yd);
                        var lines4 = new PIXI.Graphics();
                        lines4.lineStyle(4, 0x000000, 1);
                        lines4.moveTo(2 * xd, 0);
                        lines4.lineTo(2 * xd, 899);
                        var lines5 = new PIXI.Graphics();
                        lines5.lineStyle(4, 0x000000, 1);
                        lines5.moveTo(4 * xd, 0);
                        lines5.lineTo(4 * xd, 899);
                        var lines6 = new PIXI.Graphics();
                        lines6.lineStyle(4, 0x000000, 1);
                        lines6.moveTo(6 * xd, 0);
                        lines6.lineTo(6 * xd, 899);
                        _this.addChild(lines1);
                        _this.addChild(lines2);
                        _this.addChild(lines3);
                        _this.addChild(lines4);
                        _this.addChild(lines5);
                        _this.addChild(lines6);
                    };
                    if (location.search.indexOf('dev') > -1) {
                        _this.isDevMode = true;
                    }
                    if (Main_1.stamps.isTouchSupported()) {
                        _this.isPCMode = false;
                        document.addEventListener("contextmenu", function (e) { return e.preventDefault(); });
                    }
                    else {
                        _this.isPCMode = true;
                    }
                    _this.createNewGame();
                    _this.x = 0;
                    _this.y = 0;
                    _this.interactive = false;
                    _this
                        .on('pointerdown', _this.onDragStart)
                        .on('pointerup', _this.onDragEnd)
                        .on('pointerupoutside', _this.onDragEnd);
                    Main_1.eventEmitter.on(Event_1.GameFlowEvent.CreateNewGameRequest, _this.createNewAnser.bind(_this));
                    Main_1.eventEmitter.on(Event_1.GameFlowEvent.GameEndWithTimeout, function () {
                        _this.interactive = true;
                        _this.removeChild(_this.stampIcon1);
                        _this.removeChild(_this.stampIcon2);
                    });
                    Main_1.eventEmitter.on(Event_1.GameFlowEvent.chooseStamp1Request, function () {
                        _this.chooseStampType = 1;
                    });
                    Main_1.eventEmitter.on(Event_1.GameFlowEvent.chooseStamp2Request, function () {
                        _this.chooseStampType = 2;
                    });
                    Main_1.eventEmitter.on(Event_1.GameFlowEvent.CheckAnsRequest, _this.checkAns.bind(_this));
                    Main_1.eventEmitter.on(Event_1.GameFlowEvent.SeeAnsRequest, function () {
                        _this.removeChild(_this.stampIcon1);
                        _this.removeChild(_this.stampIcon2);
                        _this.drawStamp(_this.ansPoint1, false, 1);
                        _this.drawStamp(_this.ansPoint2, false, 2);
                    });
                    Main_1.eventEmitter.on(Event_1.GameFlowEvent.ReloadGameRequest, _this.createNewAnser.bind(_this));
                    return _this;
                }
                StampGameBoard.prototype.touchHandler = function () {
                    this.removeChild(this.centerCircle);
                    this.removeChild(this.testCircle1);
                    this.removeChild(this.testCircle2);
                    this.removeChild(this.testCircle3);
                };
                StampGameBoard.prototype.checkAns = function () {
                    var isAnsCorrect;
                    if (!this.isPCMode) {
                        isAnsCorrect = this.validateAns(this.centerPointArr);
                    }
                    else {
                        isAnsCorrect = this.validateAns(this.userAnsArr);
                    }
                    if (isAnsCorrect) {
                        return Main_1.eventEmitter.emit(Event_1.GameFlowEvent.CheckAnsIsRightResponse);
                    }
                    return Main_1.eventEmitter.emit(Event_1.GameFlowEvent.CheckAnsIsWrongResponse);
                };
                StampGameBoard.prototype.validateAns = function (posArr) {
                    var startIdx1 = 0, startIdx2 = 0;
                    var count = 0;
                    var xd = 1080 / 8;
                    var yd = 899 / 8;
                    var toloranceD = xd > yd ? yd : xd;
                    var ansPointArray = [];
                    ansPointArray.push(this.ansPoint1);
                    ansPointArray.push(this.ansPoint2);
                    for (; startIdx1 < 2; startIdx1++) {
                        for (startIdx2 = 0; startIdx2 < 2; startIdx2++) {
                            if (!posArr[startIdx1]) {
                                return false;
                            }
                            var distance = Math.sqrt(Math.pow(posArr[startIdx1].x - ansPointArray[startIdx2].x, 2) + Math.pow(posArr[startIdx1].y - ansPointArray[startIdx2].y, 2));
                            if (toloranceD >= distance) {
                                count++;
                            }
                        }
                    }
                    if (count >= 2) {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                return StampGameBoard;
            }(Container));
            exports_1("StampGameBoard", StampGameBoard);
        }
    };
});
