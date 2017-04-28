class Agent
{
    name :string;
    actions : any;
    currentActions : any;
    state : any;
    sm :any;

    constructor(name:string)
    {
        this.name = name;
        this.actions = [];
        this.currentActions = [];

        this.state = {};

        this.sm = new StateMachine();

        this.sm.add("idle", new IdleState(this));
        this.sm.add("moving", new MovingState(this));
        this.sm.add("action", new ActionState(this));

        this.sm.enter("idle"); 
    }

    update(){
        this.sm.update();
    }

    addAction(action:any)
    {
        action.agent = this;
        this.actions.push(action);
    }

    applyAction(action:any)
    {
        for(var effect in action.effects) {
            this.setState(effect, action.effects[effect]);
        }
    }

    
    setState = function(name:string, value:boolean) {
        this.state[name] = value;
    };

    is = function(name:string, value:string) {
        return this.state[name] == value;
    };

    getUsableActions() {
        // get all actions with cleared preconditions
        return this.actions.filter(function(action) {
            return action.canExecute();
        });
    };
}


