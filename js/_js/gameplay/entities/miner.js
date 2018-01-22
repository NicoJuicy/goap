var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Miner = (function (_super) {
    __extends(Miner, _super);
    function Miner(game, options) {
        var _this = _super.call(this, "Miner") || this;
        _this._game = game;
        _this._sprite = _this._game.add.sprite(options.x, options.y, "miner");
        _this._game.physics.arcade.enable(_this._sprite);
        _this._current_plan = [];
        _this._target = null;
        _this.setState("HasOre", false);
        _this.setState("HasTool", false);
        _this.addAction(new MineOreAction());
        _this.addAction(new DeliverOreAction());
        _this.addAction(new GetToolAction());
        return _this;
    }
    Miner.prototype.plan = function () {
        var planner = new Planner();
        var plan = planner.plan(this, {
            name: "HasOre",
            value: true
        });
        return plan;
    };
    return Miner;
}(Agent));
