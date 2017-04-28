class DeliverOreAction extends Action{

    _position:any;

    constructor(){
        super("DeliverOre",1);

        this._position = positions.material_depot;

        this.addPrecondition("HasOre",true);
        this.addEffect("HasOre",false);
    }

    execute()
    {
        MaterialStorage.Ore++;
    }
}

/*

DeliverOreAction = function() {
    Action.call(this, "DeliverOre", 1);

    this._position = positions.material_depot;

    this.addPrecondition("HasOre", true);
    this.addEffect("HasOre", false);
}

DeliverOreAction.prototype = Object.create(Action.prototype);

DeliverOreAction.prototype.execute = function() {
    MaterialStorage.Ore++;
}
*/