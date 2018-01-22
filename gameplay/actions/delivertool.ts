class DeliverToolAction extends Action{

    _position:any;

    constructor(){
        
        super("DeliverTool",1);
        this._position = positions.tool_deposit;

        this.addPrecondition("HasTool",true);
        this.addEffect("HasTool",false);
    }

    execute()
    {
        ToolsDeposit.PickAxe++;
    }
}