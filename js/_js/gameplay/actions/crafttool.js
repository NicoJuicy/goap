var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CraftToolAction = (function (_super) {
    __extends(CraftToolAction, _super);
    function CraftToolAction() {
        var _this = _super.call(this, "CraftTool", 4) || this;
        _this._position = positions.forge;
        _this.addPrecondition("HasTool", false);
        _this.addPrecondition("HasOre", true);
        _this.addEffect("HasTool", true);
        return _this;
    }
    return CraftToolAction;
}(Action));
