
class CraftToolAction extends Action
{
    _position:any;
    constructor()
    {
        super("CraftTool",4);
        
        this._position = positions.forge;

        this.addPrecondition("HasTool",false);
        this.addPrecondition("HasOre",true);
        this.addEffect("HasTool",true);
        
    }
}