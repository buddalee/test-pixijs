System.register(["./Direction"], function (exports_1, context_1) {
    "use strict";
    var Point, Direction_1, Path;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Direction_1_1) {
                Direction_1 = Direction_1_1;
            }
        ],
        execute: function () {
            Point = PIXI.Point;
            Path = (function () {
                function Path(point1, point2, board) {
                    this.point1 = point1;
                    this.point2 = point2;
                    this.board = board;
                }
                Path.prototype.canLinkInLine = function () {
                    var point1UP = this.board.getNearByPointByDirection(this.point1, Direction_1.Direction.UP);
                    var point2UP = this.board.getNearByPointByDirection(this.point2, Direction_1.Direction.UP);
                    {
                        var min = Math.max(point1UP.x, point2UP.x);
                        var max = Math.min(this.point1.x, this.point2.x);
                        for (var i = max; i >= min; i--) {
                            if (!this.board.hasMiddleValue(new Point(i, this.point1.y), new Point(i, this.point2.y))) {
                                this.path_Detail = [this.point1, new Point(i, this.point1.y), new Point(i, this.point2.y), this.point2];
                                return true;
                            }
                        }
                    }
                    var point1DOWN = this.board.getNearByPointByDirection(this.point1, Direction_1.Direction.DOWN);
                    var point2DOWN = this.board.getNearByPointByDirection(this.point2, Direction_1.Direction.DOWN);
                    {
                        var max = Math.min(point1DOWN.x, point2DOWN.x);
                        var min = Math.max(this.point1.x, this.point2.x);
                        for (var i = min; i <= max; i++) {
                            if (!this.board.hasMiddleValue(new Point(i, this.point1.y), new Point(i, this.point2.y))) {
                                this.path_Detail = [this.point1, new Point(i, this.point1.y), new Point(i, this.point2.y), this.point2];
                                return true;
                            }
                        }
                    }
                    var point1LEFT = this.board.getNearByPointByDirection(this.point1, Direction_1.Direction.LEFT);
                    var point2LEFT = this.board.getNearByPointByDirection(this.point2, Direction_1.Direction.LEFT);
                    {
                        var min = Math.max(point1LEFT.y, point2LEFT.y);
                        var max = Math.min(this.point1.y, this.point2.y);
                        for (var i = max; i >= min; i--) {
                            if (!this.board.hasMiddleValue(new Point(this.point1.x, i), new Point(this.point2.x, i))) {
                                this.path_Detail = [this.point1, new Point(this.point1.x, i), new Point(this.point2.x, i), this.point2];
                                return true;
                            }
                        }
                    }
                    var point1RIGHT = this.board.getNearByPointByDirection(this.point1, Direction_1.Direction.RIGHT);
                    var point2RIGHT = this.board.getNearByPointByDirection(this.point2, Direction_1.Direction.RIGHT);
                    {
                        var max = Math.min(point1RIGHT.y, point2RIGHT.y);
                        var min = Math.max(this.point1.y, this.point2.y);
                        for (var i = min; i <= max; i++) {
                            if (!this.board.hasMiddleValue(new Point(this.point1.x, i), new Point(this.point2.x, i))) {
                                this.path_Detail = [this.point1, new Point(this.point1.x, i), new Point(this.point2.x, i), this.point2];
                                return true;
                            }
                        }
                    }
                    if (this.point1.y != this.point2.y) {
                        var leftPoint = (this.point1.y < this.point2.y) ? this.point1 : this.point2;
                        var rightPoint = (this.point1.y >= this.point2.y) ? this.point1 : this.point2;
                        var leftPointRIGHT = this.board.getNearByPointByDirection(leftPoint, Direction_1.Direction.RIGHT);
                        var rightPointLEFT = this.board.getNearByPointByDirection(rightPoint, Direction_1.Direction.LEFT);
                        leftPointRIGHT.y = (leftPointRIGHT.y < rightPoint.y) ? leftPointRIGHT.y : rightPoint.y;
                        rightPointLEFT.y = (rightPointLEFT.y > leftPoint.y) ? rightPointLEFT.y : leftPoint.y;
                        if (leftPointRIGHT.y != leftPoint.y && rightPointLEFT.y != rightPoint.y) {
                            for (var i = rightPointLEFT.y; i <= leftPointRIGHT.y; i++) {
                                if (!this.board.hasMiddleValue(new Point(leftPoint.x, i), new Point(rightPoint.x, i))) {
                                    this.path_Detail = [leftPoint, new Point(leftPoint.x, i), new Point(rightPoint.x, i), rightPoint];
                                    return true;
                                }
                            }
                        }
                    }
                    if (this.point1.x != this.point2.x) {
                        var upPoint = (this.point1.x < this.point2.x) ? this.point1 : this.point2;
                        var downPoint = (this.point1.x >= this.point2.x) ? this.point1 : this.point2;
                        var upPointDOWN = this.board.getNearByPointByDirection(upPoint, Direction_1.Direction.DOWN);
                        var downPointUP = this.board.getNearByPointByDirection(downPoint, Direction_1.Direction.UP);
                        upPointDOWN.x = (upPointDOWN.x < downPoint.x) ? upPointDOWN.x : downPoint.x;
                        downPointUP.x = (downPointUP.x > upPoint.x) ? downPointUP.x : upPoint.x;
                        if (upPointDOWN.x != upPoint.x && downPointUP.x != downPoint.x) {
                            for (var i = downPointUP.x; i <= upPointDOWN.x; i++) {
                                if (!this.board.hasMiddleValue(new Point(i, upPoint.y), new Point(i, downPoint.y))) {
                                    this.path_Detail = [upPoint, new Point(i, upPoint.y), new Point(i, downPoint.y), downPoint];
                                    return true;
                                }
                            }
                        }
                    }
                    return false;
                };
                return Path;
            }());
            exports_1("Path", Path);
        }
    };
});
