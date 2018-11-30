System.register([], function (exports_1, context_1) {
    "use strict";
    var Direction;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Direction = (function () {
                function Direction() {
                }
                Direction.UP = "up";
                Direction.DOWN = "down";
                Direction.RIGHT = "right";
                Direction.LEFT = "left";
                return Direction;
            }());
            exports_1("Direction", Direction);
        }
    };
});
