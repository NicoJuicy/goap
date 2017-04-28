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
var GetOreAction = (function (_super) {
    __extends(GetOreAction, _super);
    function GetOreAction() {
        var _this = _super.call(this, "GetOre", 1) || this;
        _this.addEffect("Hasore", true);
        return _this;
    }
    GetOreAction.prototype.canExecute = function () {
        return MaterialStorage.Ore > 0;
    };
    GetOreAction.prototype.execute = function () {
        MaterialStorage.Ore--;
    };
    return GetOreAction;
}(Action));
