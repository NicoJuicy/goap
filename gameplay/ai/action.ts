class Action
{
    name : string;
    cost : number;
    agent:Agent;
    effects : any;
    preconditions : any;
    
    constructor(name : string, cost : number)
    {
        this.name = name;
        this.agent = undefined;
        this.effects = {};
        this.preconditions = {};
        this.cost = cost;
    }

    addEffect(name:string, value:boolean)
    {
        this.effects[name]=value;
    }

    addPrecondition(name:string,value:boolean)
    {
        this.preconditions[name]=value;
    }

    execute()
    {
         console.warn(this.name + ": You might want to override execute for me :P");
    }

    canExecute() : boolean
    {
        return true;
    }
}


/*
var Action = function(name, cost) {
    this.name = name;
    this.agent = undefined;
    this.effects = {};
    this.preconditions = {};

    this.cost = cost;
};*/
/*
Action.prototype.addEffect = function(name, value) {
    this.effects[name] = value;
};

Action.prototype.addPrecondition = function(name, value) {
    this.preconditions[name] = value;
};*/