System.register(["./ResourcesList"], function (exports_1, context_1) {
    "use strict";
    var ResourcesList_1, SoundMgr, SoundInfo;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (ResourcesList_1_1) {
                ResourcesList_1 = ResourcesList_1_1;
            }
        ],
        execute: function () {
            SoundMgr = (function () {
                function SoundMgr() {
                }
                SoundMgr.load = function () {
                    var _this = this;
                    ResourcesList_1.ResourcesList.sound.forEach(function (element) {
                        var info = new SoundInfo(element.id, element.path);
                        _this.soundList.push(info);
                    });
                };
                SoundMgr.play = function (id, loop) {
                    if (loop === void 0) { loop = false; }
                    this.soundList.forEach(function (element) {
                        if (element.soundID == id) {
                            element.sound.loop(loop);
                            element.sound.play();
                        }
                    });
                };
                SoundMgr.mute = function (value) {
                    this.isMute = value;
                    if (this.isMute) {
                        Howler.mute(true);
                    }
                    else {
                        Howler.mute(false);
                    }
                };
                SoundMgr.isMute = false;
                SoundMgr.soundList = new Array();
                return SoundMgr;
            }());
            exports_1("SoundMgr", SoundMgr);
            SoundInfo = (function () {
                function SoundInfo(_id, url) {
                    this.soundID = _id;
                    this.path = url;
                    this.load();
                }
                SoundInfo.prototype.load = function () {
                    this.sound = new Howl({ src: this.path });
                };
                return SoundInfo;
            }());
        }
    };
});
