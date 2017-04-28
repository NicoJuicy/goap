var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Blacksmith = (function (_super) {
    __extends(Blacksmith, _super);
    function Blacksmith(game, options) {
        var _this = _super.call(this, "BlackSmith") || this;
        _this._game = game;
        _this._sprite = _this._game.add.sprite(options.x, options.y, "miner");
        _this._game.physics.arcade.enable(_this._sprite);
        _this._current_plan = [];
        _this._target = null;
        _this.setState("HasOre", false);
        _this.setState("HasTool", false);
        _this.addAction(new CraftToolAction());
        _this.addAction(new DeliverToolAction());
        _this.addAction(new GetOreAction());
        return _this;
    }
    Blacksmith.prototype.plan = function () {
        var planner = new Planner();
        var plan = planner.plan(this, {
            name: "HasTool",
            value: true
        });
        return plan;
    };
    return Blacksmith;
}(Agent));
