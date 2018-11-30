System.register(["../core/Loader", "../Main", "./IntroduceBtn", "./StartGameBtn"], function (exports_1, context_1) {
    "use strict";
    var Loader_1, Main_1, IntroduceBtn_1, StartGameBtn_1, MainMenuScene;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Loader_1_1) {
                Loader_1 = Loader_1_1;
            },
            function (Main_1_1) {
                Main_1 = Main_1_1;
            },
            function (IntroduceBtn_1_1) {
                IntroduceBtn_1 = IntroduceBtn_1_1;
            },
            function (StartGameBtn_1_1) {
                StartGameBtn_1 = StartGameBtn_1_1;
            }
        ],
        execute: function () {
            MainMenuScene = (function () {
                function MainMenuScene() {
                }
                MainMenuScene.draw = function () {
                    Main_1.application.stage.addChild(PIXI.Sprite.from(Loader_1.Loader.resources["background_main_menu"].texture));
                    Main_1.application.stage.addChild(new IntroduceBtn_1.IntroduceBtn());
                    Main_1.application.stage.addChild(new StartGameBtn_1.StartGameBtn());
                };
                return MainMenuScene;
            }());
            exports_1("MainMenuScene", MainMenuScene);
        }
    };
});
