System.register(["../core/Board", "../core/Path", "../core/SoundMgr", "./GameIcon", "./LinkedLine", "../Main", "../core/Event"], function (exports_1, context_1) {
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
    var Container, Board_1, Point, Path_1, SoundMgr_1, GameIcon_1, LinkedLine_1, Main_1, Event_1, board, reloadTimes, GameBoard;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Board_1_1) {
                Board_1 = Board_1_1;
            },
            function (Path_1_1) {
                Path_1 = Path_1_1;
            },
            function (SoundMgr_1_1) {
                SoundMgr_1 = SoundMgr_1_1;
            },
            function (GameIcon_1_1) {
                GameIcon_1 = GameIcon_1_1;
            },
            function (LinkedLine_1_1) {
                LinkedLine_1 = LinkedLine_1_1;
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
            Point = PIXI.Point;
            exports_1("reloadTimes", reloadTimes = 3);
            GameBoard = (function (_super) {
                __extends(GameBoard, _super);
                function GameBoard() {
                    var _this = _super.call(this) || this;
                    _this.select1 = new Point(-1, -1);
                    _this.select2 = new Point(-1, -1);
                    _this.selected = false;
                    _this.pathHistory = [];
                    _this.valueHistory = [];
                    _this.createNewGame = function () {
                        _this.select1 = new Point(-1, -1);
                        _this.select2 = new Point(-1, -1);
                        _this.selected = false;
                        _this.pathHistory = [];
                        _this.valueHistory = [];
                        exports_1("reloadTimes", reloadTimes = 3);
                        exports_1("board", board = new Board_1.Board());
                        _this.drawBoardIcon();
                        Main_1.eventEmitter.emit(Event_1.GameFlowEvent.GameRoundStart);
                        _this.tipsPath = board.getFirstExistPath();
                    };
                    _this.revertBoard = function () {
                        var value = _this.valueHistory.pop();
                        var path = _this.pathHistory.pop();
                        if (value != null && path != null) {
                            board.board[path.point1.x][path.point1.y] = value;
                            board.board[path.point2.x][path.point2.y] = value;
                            _this.drawBoardIcon();
                            SoundMgr_1.SoundMgr.play('Back');
                        }
                    };
                    _this.drawBoardIcon = function () {
                        _this.removeChildren();
                        for (var i = 0; i < board.board.length; i++) {
                            for (var j = 0; j < board.board[i].length; j++) {
                                _this.createIcon(board.board[i][j], i, j);
                            }
                        }
                    };
                    _this.clearIcon = function (point) {
                        _this.removeChild(_this.getChildByName('icon_' + point.x + "_" + point.y));
                        board.clearPoint(point);
                    };
                    _this.iconSelected = function (point) {
                        var icon = _this.getChildByName('icon_' + point.x + "_" + point.y);
                        icon.select();
                    };
                    _this.iconUnSelected = function (point) {
                        var icon = _this.getChildByName('icon_' + point.x + "_" + point.y);
                        icon.unSelect();
                    };
                    _this.reloadBoard = function () {
                        exports_1("reloadTimes", --reloadTimes) + 1;
                        do {
                            board.rearrangeBoard();
                        } while (board.getFirstExistPath() == null);
                        _this.drawBoardIcon();
                        SoundMgr_1.SoundMgr.play('ReloadBoard');
                    };
                    _this.showTips = function () {
                        _this.tipsPath = board.getFirstExistPath();
                        var icon1 = _this.getChildByName('icon_' + _this.tipsPath.point1.x + "_" + _this.tipsPath.point1.y);
                        icon1.select();
                        var icon2 = _this.getChildByName('icon_' + _this.tipsPath.point2.x + "_" + _this.tipsPath.point2.y);
                        icon2.select();
                        SoundMgr_1.SoundMgr.play('Tips');
                    };
                    _this.cancelTips = function () {
                        if (_this.tipsPath == null) {
                            return;
                        }
                        var icon1 = _this.getChildByName('icon_' + _this.tipsPath.point1.x + "_" + _this.tipsPath.point1.y);
                        if (icon1)
                            icon1.unSelect();
                        var icon2 = _this.getChildByName('icon_' + _this.tipsPath.point2.x + "_" + _this.tipsPath.point2.y);
                        if (icon2)
                            icon2.unSelect();
                    };
                    _this.createIcon = function (id, x, y) {
                        var icon = new GameIcon_1.GameIcon(id, x, y);
                        _this.addChild(icon);
                        var iconClickHandler = function () {
                            _this.cancelTips();
                            if (_this.selected) {
                                var selectCorrect_1 = false;
                                _this.select2 = new Point(x, y);
                                _this.iconSelected(_this.select2);
                                setTimeout(function () {
                                    if (board.hasSameValue(_this.select1, _this.select2)) {
                                        if (!(_this.select1.x == x && _this.select1.y == y)) {
                                            var path = new Path_1.Path(_this.select1, _this.select2, board);
                                            if (path.canLinkInLine()) {
                                                _this.pathHistory.push(path);
                                                _this.valueHistory.push(board.getValue(_this.select1));
                                                LinkedLine_1.LinkedLine.instance.drawPath(path);
                                                _this.clearIcon(_this.select1);
                                                _this.clearIcon(_this.select2);
                                                Main_1.eventEmitter.emit(Event_1.GameFlowEvent.LinkedLineSuccess);
                                                selectCorrect_1 = true;
                                                if (board.gameRoundEnd()) {
                                                    Main_1.eventEmitter.emit(Event_1.GameFlowEvent.GamePass);
                                                }
                                                else if (board.getFirstExistPath() == null) {
                                                    if (reloadTimes > 0) {
                                                        _this.reloadBoard();
                                                        Main_1.eventEmitter.emit(Event_1.GameFlowEvent.BoardNeedReload);
                                                    }
                                                    else {
                                                        Main_1.eventEmitter.emit(Event_1.GameFlowEvent.GameEndWithNoPath);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    if (selectCorrect_1) {
                                        SoundMgr_1.SoundMgr.play('Sound_select_crrect');
                                    }
                                    else {
                                        SoundMgr_1.SoundMgr.play('Sound_select_error');
                                        _this.iconUnSelected(_this.select1);
                                        _this.iconUnSelected(_this.select2);
                                    }
                                    _this.selected = false;
                                }, 0);
                            }
                            else {
                                _this.select1 = new Point(x, y);
                                _this.iconSelected(_this.select1);
                                _this.selected = true;
                                SoundMgr_1.SoundMgr.play('Sound_select_1');
                            }
                        };
                        icon.on("click", iconClickHandler);
                        icon.on("tap", iconClickHandler);
                    };
                    _this.createNewGame();
                    _this.x = 175;
                    _this.y = 20;
                    Main_1.eventEmitter.on(Event_1.GameFlowEvent.ReloadBoardRequest, _this.reloadBoard.bind(_this));
                    Main_1.eventEmitter.on(Event_1.GameFlowEvent.TipsRequest, _this.showTips.bind(_this));
                    Main_1.eventEmitter.on(Event_1.GameFlowEvent.RevertBackRequest, _this.revertBoard.bind(_this));
                    Main_1.eventEmitter.on(Event_1.GameFlowEvent.CreateNewGameRequest, _this.createNewGame.bind(_this));
                    return _this;
                }
                return GameBoard;
            }(Container));
            exports_1("GameBoard", GameBoard);
        }
    };
});
