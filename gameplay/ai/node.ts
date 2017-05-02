class NodeT
{
    parent:NodeT;
    action:Action;
    cost:number;
    state : any;

    constructor(parent:NodeT,action:Action,cost:number,state:any)
    {
        this.parent = parent;
        this.action = action;
        this.cost = cost;
        this.state = state;
    }
}