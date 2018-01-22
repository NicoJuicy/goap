class GetOreAction extends Action{
    _position:any;

    constructor()
    {
        super("GetOre",1);
        this._position = positions.material_depot;
        this.addEffect("HasOre",true);
    }

    canExecute() : boolean
    {
        return MaterialStorage.Ore > 0;
    }

    execute()
    {
        MaterialStorage.Ore--;
    }
}
