class Miner extends Agent{

    _game : any;
    _sprite:any;
    _current_plan:any;
    _target:any;


    constructor(game:any, options:any){
        super("Miner");

        this._game = game;
        this._sprite = this._game.add.sprite(options.x, options.y,"miner");
        this._game.physics.arcade.enable(this._sprite);

        this._current_plan = [];
        this._target = null;

        this.setState("HasOre",false);
        this.setState("HasTool",false);

        this.addAction(new MineOreAction());
        this.addAction(new DeliverOreAction());
        this.addAction(new GetToolAction());
    }

    plan(){
        var planner = new Planner();

        var plan = planner.plan(this, {
            name: "HasOre",
            value: true
        });

        return plan;
    }
}
