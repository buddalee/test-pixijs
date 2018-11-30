System.register(["./ResourcesList", "../Main", "./Event"], function (exports_1, context_1) {
    "use strict";
    var ResourcesList_1, Main_1, Event_1, Loader;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (ResourcesList_1_1) {
                ResourcesList_1 = ResourcesList_1_1;
            },
            function (Main_1_1) {
                Main_1 = Main_1_1;
            },
            function (Event_1_1) {
                Event_1 = Event_1_1;
            }
        ],
        execute: function () {
            Loader = (function () {
                function Loader() {
                }
                Loader.load = function () {
                    var _this = this;
                    this.loader = new PIXI.loaders.Loader();
                    ResourcesList_1.ResourcesList.img.forEach(function (element) {
                        _this.loader.add(element.id, element.path);
                    });
                    this.loader.load(function (loader, resources) {
                        _this.resources = resources;
                    });
                    this.loader.onProgress.add(function (e) {
                        jQuery("#loadingPercent").html("Loading..." + Math.floor(e.progress) + "%");
                    });
                    this.loader.onError.add(function (t, e, r) {
                        _this.failedFiles.push(r.name);
                    });
                    this.loader.onLoad.add(function (e, t) {
                        _this.completedFiles.push(t.name);
                    });
                    this.loader.onComplete.add(function () {
                        if (_this.failedFiles.length == 0) {
                            jQuery("#loadingPage").hide();
                            Main_1.eventEmitter.emit(Event_1.CoreEvent.AssetsLoadComplete);
                        }
                        else {
                            jQuery("#loadingPercent").html("Loading...failed: could not load " + _this.failedFiles);
                        }
                    });
                };
                Loader.failedFiles = [];
                Loader.completedFiles = [];
                return Loader;
            }());
            exports_1("Loader", Loader);
        }
    };
});
