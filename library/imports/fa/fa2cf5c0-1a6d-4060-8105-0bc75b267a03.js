"use strict";
cc._RF.push(module, 'fa2cfXAGm1AYIEFC8dbJnoD', 'Aumentar');
// Scripts/Aumentar.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {

        aumentar: cc.Button,
        massaText: cc.Label
    },

    onLoad: function onLoad() {},

    onButtonClick: function onButtonClick() {
        this.massa = this.massaText.string.parseInt();
        this.massa += 1;
        this.massaText.string = this.massa.toString();
    }
});

cc._RF.pop();