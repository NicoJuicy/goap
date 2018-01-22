class GetToolAction extends Action{
    
    _position:any;

    constructor(){
        super("GetTool",1);

        this.addPrecondition("HasTool", false);
        this.addEffect("HasTool", true);

        this._position=positions.tool_deposit;
    }

    canExecute() : boolean
    {
         return ToolsDeposit.PickAxe > 0;
    }

    execute()
    {
       ToolsDeposit.PickAxe--;
    }
}