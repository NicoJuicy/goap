var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MineOreAction = (function (_super) {
    __extends(MineOreAction, _super);
    function MineOreAction() {
        var _this = _super.call(this, "MineOre", 4) || this;
        _this._mineCounter = 0;
        _this._position = positions.ore;
        _this.addPrecondition("HasTool", true);
        _this.addPrecondition("HasOre", false);
        _this.addEffect("HasOre", true);
        return _this;
    }
    MineOreAction.prototype.execute = function () {
        this._mineCounter++;
        if (this._mineCounter >= 4) {
            console.log("Tool broke while mining :(");
            this.agent.setState("HasTool", false);
            this._mineCounter = 0;
        }
    };
    return MineOreAction;
}(Action));
;
