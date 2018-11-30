System.register(["./Path", "./Direction"], function (exports_1, context_1) {
    "use strict";
    var Path_1, Point, Direction_1, Board;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Path_1_1) {
                Path_1 = Path_1_1;
            },
            function (Direction_1_1) {
                Direction_1 = Direction_1_1;
            }
        ],
        execute: function () {
            Point = PIXI.Point;
            Board = (function () {
                function Board() {
                    this.pairNumPermutations = {};
                    var content = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
                    var length = 10;
                    var data = (content.concat(content).concat(content).concat(content)).sort(function (a, b) { return (Math.random() > .5) ? 1 : -1; });
                    this.board = [];
                    for (var i = 0; i < length; i++) {
                        this.board.push(data.slice(i * length, (i + 1) * length));
                    }
                }
                Board.prototype.gameRoundEnd = function () {
                    for (var i = 0; i < this.board.length; i++) {
                        for (var j = 0; j < this.board[i].length; j++) {
                            if (this.board[i][j] != null) {
                                return false;
                            }
                        }
                    }
                    return true;
                };
                Board.prototype.getFirstExistPath = function () {
                    var searchedValue = [];
                    for (var i = 0; i < this.board.length; i++) {
                        for (var j = 0; j < this.board[i].length; j++) {
                            var value = this.board[i][j];
                            if (value != null && searchedValue.indexOf(value) == -1) {
                                searchedValue.push(value);
                                var positionsArr = this.getPositionByValue(value);
                                var permutationsArr = this.getPairNumPermutations(positionsArr.length);
                                for (var k = 0; k < permutationsArr.length; k++) {
                                    var v = permutationsArr[k];
                                    var path = new Path_1.Path(positionsArr[v[0]], positionsArr[v[1]], this);
                                    if (path.canLinkInLine()) {
                                        return path;
                                    }
                                }
                            }
                        }
                    }
                    return null;
                };
                Board.prototype.getAllValueInBoard = function () {
                    var values = [];
                    for (var i = 0; i < this.board.length; i++) {
                        for (var j = 0; j < this.board[i].length; j++) {
                            if (this.board[i][j] != null) {
                                values.push(this.board[i][j]);
                            }
                        }
                    }
                    return values;
                };
                Board.prototype.rearrangeBoard = function () {
                    var values = this.getAllValueInBoard().sort(function (a, b) { return (Math.random() > .5) ? 1 : 0; });
                    for (var i = 0; i < this.board.length; i++) {
                        for (var j = 0; j < this.board[i].length; j++) {
                            if (this.board[i][j] != null) {
                                this.board[i][j] = values.pop();
                            }
                        }
                    }
                };
                Board.prototype.getPairNumPermutations = function (num) {
                    if (this.pairNumPermutations[num] != null) {
                        return this.pairNumPermutations[num];
                    }
                    var data = [];
                    for (var i = 0; i < num; i++) {
                        for (var j = 0; j < num; j++) {
                            if (i != j && i <= j) {
                                data.push([i, j]);
                            }
                        }
                    }
                    this.pairNumPermutations[num] = data;
                    return data;
                };
                Board.prototype.getPositionByValue = function (value) {
                    var arr = new Array();
                    for (var i = 0; i < this.board.length; i++) {
                        for (var j = 0; j < this.board[i].length; j++) {
                            if (this.board[i][j] == value) {
                                arr.push(new Point(i, j));
                            }
                        }
                    }
                    return arr;
                };
                Board.prototype.getNearByPointByDirection = function (point, direction) {
                    var nearByPoint = new Point(point.x, point.y);
                    switch (direction) {
                        case Direction_1.Direction.UP:
                            for (var i = point.x - 1; i >= 0; i--) {
                                if (this.board[i][point.y] == null) {
                                    nearByPoint.x = i;
                                }
                                else {
                                    break;
                                }
                            }
                            if (nearByPoint.x == 0) {
                                nearByPoint.x = -1;
                            }
                            break;
                        case Direction_1.Direction.DOWN:
                            var maxLengthDOWN = this.board.length;
                            for (var i = point.x + 1; i < maxLengthDOWN; i++) {
                                if (this.board[i][point.y] == null) {
                                    nearByPoint.x = i;
                                }
                                else {
                                    break;
                                }
                            }
                            if (nearByPoint.x == maxLengthDOWN - 1) {
                                nearByPoint.x = maxLengthDOWN;
                            }
                            break;
                        case Direction_1.Direction.RIGHT:
                            var maxLengthRIGHT = this.board[0].length;
                            for (var i = point.y + 1; i < maxLengthRIGHT; i++) {
                                if (this.board[point.x][i] == null) {
                                    nearByPoint.y = i;
                                }
                                else {
                                    break;
                                }
                            }
                            if (nearByPoint.y == maxLengthRIGHT - 1) {
                                nearByPoint.y = maxLengthRIGHT;
                            }
                            break;
                        case Direction_1.Direction.LEFT:
                            for (var i = point.y - 1; i >= 0; i--) {
                                if (this.board[point.x][i] == null) {
                                    nearByPoint.y = i;
                                }
                                else {
                                    break;
                                }
                            }
                            if (nearByPoint.y == 0) {
                                nearByPoint.y = -1;
                            }
                            break;
                    }
                    return nearByPoint;
                };
                Board.prototype.canFindPath = function (a, b, direction) {
                    return this.hasMiddleValue(a, b);
                };
                Board.prototype.hasMiddleValue = function (a, b) {
                    var arr = [];
                    if (a.x == b.x) {
                        if (a.x == -1 || a.x == this.board.length)
                            return false;
                        var max = Math.max(a.y, b.y);
                        var min = Math.min(a.y, b.y);
                        for (var i = min + 1; i < max; i++) {
                            if (this.board[a.x][i] != null) {
                                return true;
                            }
                        }
                        return false;
                    }
                    else if (a.y == b.y) {
                        if (a.y == -1 || a.y == this.board[0].length)
                            return false;
                        var max = Math.max(a.x, b.x);
                        var min = Math.min(a.x, b.x);
                        for (var i = min + 1; i < max; i++) {
                            if (this.board[i][a.y] != null) {
                                return true;
                            }
                        }
                        return false;
                    }
                    else {
                        return true;
                    }
                };
                Board.prototype.hasSameValue = function (point1, point2) {
                    return this.board[point1.x][point1.y] == this.board[point2.x][point2.y];
                };
                Board.prototype.getValue = function (point) {
                    return this.board[point.x][point.y];
                };
                Board.prototype.clearPoint = function (point) {
                    this.board[point.x][point.y] = null;
                    point = null;
                };
                return Board;
            }());
            exports_1("Board", Board);
        }
    };
});
