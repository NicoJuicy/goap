class MineOreAction extends Action
{
   // Action.call(this, "MineOre", 4);

   _mineCounter:number;
   _position:any;
   agent:Agent;


    constructor()
    {
        super("MineOre",4);

        this._mineCounter = 0;

        this._position = positions.ore;

        this.addPrecondition("HasTool", true);
        this.addPrecondition("HasOre", false);
        this.addEffect("HasOre", true);
    }
    

    execute()
    {
        this._mineCounter++;

        if(this._mineCounter >= 4) {
            console.log("Tool broke while mining :(");
            this.agent.setState("HasTool", false);
            this._mineCounter = 0;
        }
    }
};
