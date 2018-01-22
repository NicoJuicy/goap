var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DeliverOreAction = (function (_super) {
    __extends(DeliverOreAction, _super);
    function DeliverOreAction() {
        var _this = _super.call(this, "DeliverOre", 1) || this;
        _this._position = positions.material_depot;
        _this.addPrecondition("HasOre", true);
        _this.addEffect("HasOre", false);
        return _this;
    }
    DeliverOreAction.prototype.execute = function () {
        MaterialStorage.Ore++;
    };
    return DeliverOreAction;
}(Action));
