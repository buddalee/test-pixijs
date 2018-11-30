System.register([], function (exports_1, context_1) {
    "use strict";
    var paintingInfos, Stamps;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("paintingInfos", paintingInfos = []);
            Stamps = (function () {
                function Stamps() {
                    this.getOpenData();
                    this.LevelNum = 1;
                    this.centerPTArr = [];
                    var startx = 0, starty = 0, endx = 4, endy = 4;
                    var xd = 1080 / 8;
                    var yd = 899 / 8;
                    for (; startx < endx; startx++) {
                        for (starty = 0; starty < endy; starty++) {
                            var x = xd + starty * 2 * xd;
                            var y = yd + startx * 2 * yd;
                            this.centerPTArr.push({ x: x, y: y });
                        }
                    }
                }
                Stamps.prototype.getRandomInt = function (min, max) {
                    this.anserNum1 = Math.floor(Math.random() * (max - min + 1)) + min;
                    this.anserNum2 = Math.floor(Math.random() * (max - min + 1)) + min;
                    while (this.anserNum1 === this.anserNum2) {
                        this.anserNum2 = Math.floor(Math.random() * (max - min + 1)) + min;
                    }
                };
                Stamps.prototype.getOpenData = function () {
                    var serials = ['04000974', '04000975', '04001001'];
                    var queue = [];
                    serials.forEach(function (serial_no) {
                        var settings = {
                            "async": false,
                            "crossDomain": true,
                            "url": "https://cors-anywhere.herokuapp.com/openapi.npm.gov.tw/v1/rest/collection/search/" + serial_no,
                            "method": "GET",
                            "headers": {
                                "apiKey": "64991b29-619f-43f9-a86d-1441c3c5f8a3"
                            }
                        };
                        queue.push($.ajax(settings));
                    });
                    $.when(queue[0], queue[1], queue[2]).done(function (r1, r2, r3) {
                        console.log(r1);
                        console.log(r2);
                        console.log(r3);
                        paintingInfos.push(r1[0].result[0]);
                        paintingInfos.push(r2[0].result[0]);
                        paintingInfos.push(r3[0].result[0]);
                        console.log("all ajax down ");
                    });
                };
                Stamps.prototype.isTouchSupported = function () {
                    if (('ontouchstart' in window) ||
                        (navigator.maxTouchPoints > 0) ||
                        (navigator.msMaxTouchPoints > 0)) {
                        return true;
                    }
                    return false;
                };
                Stamps.prototype.generateAnsPoint = function () {
                    this.getRandomInt(1, 16);
                    return {
                        ansPoint1: this.centerPTArr[this.anserNum1 - 1],
                        ansPoint2: this.centerPTArr[this.anserNum2 - 1]
                    };
                };
                return Stamps;
            }());
            exports_1("Stamps", Stamps);
        }
    };
});
