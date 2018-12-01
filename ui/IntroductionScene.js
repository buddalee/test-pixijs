System.register(["../core/Loader", "../Main", "./CheckAnsBtn", "./PaintingTitle", "./ReloadLevelBtn", "./SeeAnsBtn", "./ChooseStamp1Btn", "./ChooseStamp2Btn", "./IntroduceBtn1"], function (exports_1, context_1) {
    "use strict";
    var Loader_1, Main_1, CheckAnsBtn_1, PaintingTitle_1, ReloadLevelBtn_1, SeeAnsBtn_1, ChooseStamp1Btn_1, ChooseStamp2Btn_1, IntroduceBtn1_1, IntroductionScene;
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
            function (IntroduceBtn1_1_1) {
                IntroduceBtn1_1 = IntroduceBtn1_1_1;
            }
        ],
        execute: function () {
            IntroductionScene = (function () {
                function IntroductionScene() {
                }
                IntroductionScene.draw = function () {
                    var handleBackground = PIXI.Sprite.from(Loader_1.Loader.resources["background"].texture);
                    handleBackground.x = 1080;
                    handleBackground.y = 0;
                    Main_1.application.stage.addChild(handleBackground);
                    Main_1.application.stage.addChild(PIXI.Sprite.from(Loader_1.Loader.resources["demo"].texture));
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
                    Main_1.application.stage.addChild(new SeeAnsBtn_1.SeeAnsBtn());
                    var gt = new PIXI.Graphics();
                    gt.beginFill(0x333333, 0.2);
                    gt.drawRect(0, 0, 1440, 899);
                    gt.endFill();
                    Main_1.application.stage.addChild(gt);
                    var stampIcon1 = PIXI.Sprite.from(Loader_1.Loader.resources["stamp1_icon"].texture);
                    stampIcon1.pivot.x = stampIcon1.width / 2;
                    stampIcon1.pivot.y = stampIcon1.height / 2;
                    stampIcon1.width = 80;
                    stampIcon1.height = 80;
                    stampIcon1.x = 348;
                    stampIcon1.y = 550;
                    Main_1.application.stage.addChild(stampIcon1);
                    var stampIcon2 = PIXI.Sprite.from(Loader_1.Loader.resources["stamp2_icon"].texture);
                    stampIcon2.pivot.x = stampIcon2.width / 2;
                    stampIcon2.pivot.y = stampIcon2.height / 2;
                    stampIcon2.width = 80;
                    stampIcon2.height = 80;
                    stampIcon2.x = 150;
                    stampIcon2.y = 510;
                    Main_1.application.stage.addChild(stampIcon2);
                    var descriptionHint1 = new PIXI.Text("1.限時5秒記住印章位置，5秒後即消失", {
                        fontSize: 28,
                        fontFamily: 'PingFangTC',
                        fill: '#fff',
                        align: 'center'
                    });
                    descriptionHint1.x = 152;
                    descriptionHint1.y = 386;
                    Main_1.application.stage.addChild(descriptionHint1);
                    var descriptionHint2 = new PIXI.Text("2.選擇印章樣式在畫作蓋出相對位置", {
                        fontSize: 28,
                        fontFamily: 'PingFangTC',
                        fill: '#fff',
                        align: 'center'
                    });
                    descriptionHint2.x = 910.5;
                    descriptionHint2.y = 292;
                    Main_1.application.stage.addChild(descriptionHint2);
                    var descriptionHint3 = new PIXI.Text("3.確定答案或選擇重新挑戰", {
                        fontSize: 28,
                        fontFamily: 'PingFangTC',
                        fill: '#fff',
                        align: 'center'
                    });
                    descriptionHint3.x = 911;
                    descriptionHint3.y = 568;
                    Main_1.application.stage.addChild(descriptionHint3);
                    var descriptionHint4 = new PIXI.Text("4.看完攻略後，就可以按開始遊戲囉 =>", {
                        fontSize: 28,
                        fontFamily: 'PingFangTC',
                        fill: '#fff',
                        align: 'center'
                    });
                    descriptionHint4.x = 200;
                    descriptionHint4.y = 768;
                    Main_1.application.stage.addChild(descriptionHint4);
                    Main_1.application.stage.addChild(new IntroduceBtn1_1.IntroduceBtn1());
                };
                return IntroductionScene;
            }());
            exports_1("IntroductionScene", IntroductionScene);
        }
    };
});
