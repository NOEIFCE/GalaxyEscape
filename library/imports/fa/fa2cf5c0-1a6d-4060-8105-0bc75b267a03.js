"use strict";
cc._RF.push(module, 'fa2cfXAGm1AYIEFC8dbJnoD', 'ButtonCtrl');
// Scripts/ButtonCtrl.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {

        aumentar: {
            default: null,
            type: cc.Button
        },
        massaText: {
            default: null,
            type: cc.Label
        },
        diminuir: {
            default: null,
            type: cc.Button
        },
        massa: 1

    },

    onLoad: function onLoad() {},

    onAddButtonClick: function onAddButtonClick() {
        this.massa += 1;
        if (this.massa > 20) {
            this.massa = 20;
            this.massaText.string = this.massa.toString();
        } else {
            this.massaText.string = this.massa.toString();
        }
    },

    onRemoveButtonClick: function onRemoveButtonClick() {
        this.massa -= 1;
        if (this.massa < 1) {
            this.massa = 1;
            this.massaText.string = this.massa.toString();
        } else {
            this.massaText.string = this.massa.toString();
        }
    }
});

cc._RF.pop();