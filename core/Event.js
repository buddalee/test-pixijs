System.register([], function (exports_1, context_1) {
    "use strict";
    var CoreEvent, GameFlowEvent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            CoreEvent = (function () {
                function CoreEvent() {
                }
                CoreEvent.AssetsLoadComplete = "AssetsLoadComplete";
                return CoreEvent;
            }());
            exports_1("CoreEvent", CoreEvent);
            GameFlowEvent = (function () {
                function GameFlowEvent() {
                }
                GameFlowEvent.GameEndWithTimeout = "GameEndWithTimeout";
                GameFlowEvent.GameEndWithNoPath = "GameEndWithNoPath";
                GameFlowEvent.GamePass = "GamePass";
                GameFlowEvent.ShowAnsCorrect = "ShowAnsCorrect";
                GameFlowEvent.ShowAnsWrong = "ShowAnsWrong";
                GameFlowEvent.ReloadBoardRequest = "ReloadBoardRequest";
                GameFlowEvent.RevertBackRequest = "RevertBackRequest";
                GameFlowEvent.BoardNeedReload = "BoardNeedReload";
                GameFlowEvent.TipsRequest = "TipsRequest";
                GameFlowEvent.CreateNewGameRequest = "CreateNewGameRequest";
                GameFlowEvent.GameRoundStart = "GameRoundStart";
                GameFlowEvent.LinkedLineSuccess = "LinkedLineSuccess";
                GameFlowEvent.RenderGameScene = "RenderGameScene";
                GameFlowEvent.RenderPaintingInfoScene = "RenderPaintingInfoScene";
                GameFlowEvent.chooseStamp1Request = "chooseStamp1Request";
                GameFlowEvent.chooseStamp2Request = "chooseStamp2Request";
                GameFlowEvent.CheckAnsRequest = "CheckAnsRequest";
                GameFlowEvent.CheckAnsIsRightResponse = "CheckAnsIsRightResponse";
                GameFlowEvent.CheckAnsIsWrongResponse = "CheckAnsIsWrongResponse";
                GameFlowEvent.NextLevelRequest = "NextLevelRequest";
                GameFlowEvent.SeeAnsRequest = "SeeAnsRequest";
                GameFlowEvent.ReloadGameRequest = "ReloadGameRequest";
                return GameFlowEvent;
            }());
            exports_1("GameFlowEvent", GameFlowEvent);
        }
    };
});
