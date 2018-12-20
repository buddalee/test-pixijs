System.register([], function (exports_1, context_1) {
    "use strict";
    var Resources, ResourcesList;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Resources = (function () {
                function Resources(id, path) {
                    this.id = id;
                    this.path = path;
                }
                return Resources;
            }());
            ResourcesList = (function () {
                function ResourcesList() {
                }
                ResourcesList.img = [
                    new Resources('level1', 'assets/1.jpg'),
                    new Resources('level2', 'assets/2.jpg'),
                    new Resources('level3', 'assets/3.jpg'),
                    new Resources('demo', 'assets/demo.jpg'),
                    new Resources('background', 'assets/bg-2.png'),
                    new Resources('background_main_menu', 'assets/bg.png'),
                    new Resources('timer_bg', 'assets/img-number.png'),
                    new Resources('stamp1_icon', 'assets/stamp1.png'),
                    new Resources('stamp2_icon', 'assets/stamp2.png'),
                    new Resources('btn1', 'assets/btn-normal-m.png'),
                    new Resources('painting_name', 'assets/img-border.png'),
                    new Resources('dialog', 'assets/img-pop.png'),
                    new Resources('next_level_btn', 'assets/btn-normal-s.png'),
                    new Resources('mouse_stamp', 'assets/mouse-stamp.png'),
                    new Resources('mouse_stamp@2x', 'assets/mouse-stamp@2x.png'),
                    new Resources('Introduce_Button', 'assets/introduce_btn.png'),
                    new Resources('StartGame_Button', 'assets/start_game_btn.png'),
                ];
                return ResourcesList;
            }());
            exports_1("ResourcesList", ResourcesList);
        }
    };
});
