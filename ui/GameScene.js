System.register(["../core/Loader", "../Main", "./CheckAnsBtn", "./PaintingTitle", "./Dialog", "./ReloadLevelBtn", "./SeeAnsBtn", "./ChooseStamp1Btn", "./ChooseStamp2Btn", "./StampGameBoard"], function (exports_1, context_1) {
    "use strict";
    var Loader_1, Main_1, CheckAnsBtn_1, PaintingTitle_1, Dialog_1, ReloadLevelBtn_1, SeeAnsBtn_1, ChooseStamp1Btn_1, ChooseStamp2Btn_1, StampGameBoard_1, GameScene;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Loader_1_1) {
                Loader_1 = Loader_1_1;
            },
            function (Main_1_1) {
                Main_1 = Main_1_1;
            },
            function (CheckAnsBtn_1_1) {
                CheckAnsBtn_1 = CheckAnsBtn_1_1;
            },
            function (PaintingTitle_1_1) {
                PaintingTitle_1 = PaintingTitle_1_1;
            },
            function (Dialog_1_1) {
                Dialog_1 = Dialog_1_1;
            },
            function (ReloadLevelBtn_1_1) {
                ReloadLevelBtn_1 = ReloadLevelBtn_1_1;
            },
            function (SeeAnsBtn_1_1) {
                SeeAnsBtn_1 = SeeAnsBtn_1_1;
            },
            function (ChooseStamp1Btn_1_1) {
                ChooseStamp1Btn_1 = ChooseStamp1Btn_1_1;
            },
            function (ChooseStamp2Btn_1_1) {
                ChooseStamp2Btn_1 = ChooseStamp2Btn_1_1;
            },
            function (StampGameBoard_1_1) {
                StampGameBoard_1 = StampGameBoard_1_1;
            }
        ],
        execute: function () {
            GameScene = (function () {
                function GameScene() {
                }
                GameScene.draw = function () {
                    var handleBackground = PIXI.Sprite.from(Loader_1.Loader.resources["background"].texture);
                    handleBackground.x = 1080;
                    handleBackground.y = 0;
                    Main_1.application.stage.addChild(handleBackground);
                    Main_1.application.stage.addChild(new StampGameBoard_1.StampGameBoard());
                    Main_1.application.stage.addChild(new CheckAnsBtn_1.CheckAnsBtn());
                    var chooseStampHint = new PIXI.Text("請選擇印章總類", {
                        fontSize: 21,
                        fontFamily: 'PingFangTC',
                        fill: '#8b572a',
                        align: 'center'
                    });
                    chooseStampHint.x = 1094;
                    chooseStampHint.y = 146;
                    Main_1.application.stage.addChild(chooseStampHint);
                    Main_1.application.stage.addChild(new PaintingTitle_1.PaintingTitle());
                    Main_1.application.stage.addChild(new ChooseStamp1Btn_1.ChooseStamp1Btn());
                    Main_1.application.stage.addChild(new ChooseStamp2Btn_1.ChooseStamp2Btn());
                    Main_1.application.stage.addChild(new ReloadLevelBtn_1.ReloadLevelBtn());
                    Main_1.application.stage.addChild(new SeeAnsBtn_1.SeeAnsBtn());
                    Main_1.application.stage.addChild(new Dialog_1.Dialog());
                };
                return GameScene;
            }());
            exports_1("GameScene", GameScene);
        }
    };
});
