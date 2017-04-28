class NodeT
{
    parent:any;
    action:any;
    cost:number;
    state : any;

    constructor(parent:any,action:any,cost:number,state:any)
    {
        this.parent = parent;
        this.action = action;
        this.cost = cost;
        this.state = state;
    }
}