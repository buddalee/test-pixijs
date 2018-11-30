System.register(["../core/Loader", "../Main", "../core/Stamps", "./FBBtn", "./PaintingTitle", "./ContinueBtn"], function (exports_1, context_1) {
    "use strict";
    var Loader_1, Main_1, Stamps_1, FBBtn_1, PaintingTitle_1, ContinueBtn_1, PaintingInfoScene;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Loader_1_1) {
                Loader_1 = Loader_1_1;
            },
            function (Main_1_1) {
                Main_1 = Main_1_1;
            },
            function (Stamps_1_1) {
                Stamps_1 = Stamps_1_1;
            },
            function (FBBtn_1_1) {
                FBBtn_1 = FBBtn_1_1;
            },
            function (PaintingTitle_1_1) {
                PaintingTitle_1 = PaintingTitle_1_1;
            },
            function (ContinueBtn_1_1) {
                ContinueBtn_1 = ContinueBtn_1_1;
            }
        ],
        execute: function () {
            PaintingInfoScene = (function () {
                function PaintingInfoScene() {
                }
                PaintingInfoScene.draw = function () {
                    var param = location.search;
                    var levelNumber = 1;
                    if (param.indexOf('level=2') > -1) {
                        levelNumber = 2;
                    }
                    if (param.indexOf('level=3') > -1) {
                        levelNumber = 3;
                    }
                    if (param.indexOf('level=1') > -1) {
                        levelNumber = 1;
                    }
                    Main_1.application.stage.addChild(PIXI.Sprite.from(Loader_1.Loader.resources["level" + levelNumber].texture));
                    var handleBackground = PIXI.Sprite.from(Loader_1.Loader.resources["background"].texture);
                    handleBackground.x = 1080;
                    handleBackground.y = 0;
                    Main_1.application.stage.addChild(handleBackground);
                    console.log('paintingInfos ', Stamps_1.paintingInfos);
                    var info = Stamps_1.paintingInfos[levelNumber - 1];
                    var author = info.ArticleMaker;
                    console.log('author: ', author);
                    var authorText = new PIXI.Text(author, {
                        fontSize: 16,
                        fontFamily: 'PingFangTC',
                        fill: '#4a4a4a',
                        align: 'center'
                    });
                    authorText.x = 1094;
                    authorText.y = 182;
                    Main_1.application.stage.addChild(authorText);
                    var authorTitle = new PIXI.Text('創作者', {
                        fontSize: 21,
                        fontFamily: 'PingFangTC',
                        fill: '#8b572a',
                        align: 'center'
                    });
                    authorTitle.x = 1094;
                    authorTitle.y = 146;
                    Main_1.application.stage.addChild(authorTitle);
                    var description = info.ArticleContext.replace(/&nbsp;/g, '');
                    console.log('author: ', author);
                    var descriptionText = new PIXI.Text(description, {
                        fontSize: 16,
                        fontFamily: 'PingFangTC',
                        fill: '#4a4a4a',
                        align: 'center',
                        breakWords: true,
                        wordWrap: true,
                        wordWrapWidth: 320
                    });
                    descriptionText.x = 1094;
                    descriptionText.y = 258;
                    Main_1.application.stage.addChild(descriptionText);
                    var descriptionTitle = new PIXI.Text('文物簡介', {
                        fontSize: 21,
                        fontFamily: 'PingFangTC',
                        fill: '#8b572a',
                        align: 'center'
                    });
                    descriptionTitle.x = 1094;
                    descriptionTitle.y = 218;
                    Main_1.application.stage.addChild(descriptionTitle);
                    Main_1.application.stage.addChild(new PaintingTitle_1.PaintingTitle());
                    Main_1.application.stage.addChild(new ContinueBtn_1.ContinueBtn());
                    Main_1.application.stage.addChild(new FBBtn_1.FBBtn());
                };
                return PaintingInfoScene;
            }());
            exports_1("PaintingInfoScene", PaintingInfoScene);
        }
    };
});
