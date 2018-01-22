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
var GetToolAction = (function (_super) {
    __extends(GetToolAction, _super);
    function GetToolAction() {
        var _this = _super.call(this, "GetTool", 1) || this;
        _this.addPrecondition("HasTool", false);
        _this.addEffect("HasTool", true);
        _this._position = positions.tool_deposit;
        return _this;
    }
    GetToolAction.prototype.canExecute = function () {
        return ToolsDeposit.PickAxe > 0;
    };
    GetToolAction.prototype.execute = function () {
        ToolsDeposit.PickAxe--;
    };
    return GetToolAction;
}(Action));
