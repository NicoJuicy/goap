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
var DeliverToolAction = (function (_super) {
    __extends(DeliverToolAction, _super);
    function DeliverToolAction() {
        var _this = _super.call(this, "DeliverTool", 1) || this;
        _this._position = positions.tool_deposit;
        _this.addPrecondition("HasTool", true);
        _this.addEffect("HasTool", false);
        return _this;
    }
    DeliverToolAction.prototype.execute = function () {
        ToolsDeposit.PickAxe++;
    };
    return DeliverToolAction;
}(Action));
