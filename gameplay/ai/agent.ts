class Agent
{
    name :string;
    actions : Array<Action>;
    currentActions : Array<Action>;
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

    addAction(action:Action)
    {
        action.agent = this;
        this.actions.push(action);
    }

    applyAction(action:Action)
    {
        for(var effect in action.effects) {
            this.setState(effect, action.effects[effect]);
        }
    }

    
    setState = function(name:string, value:boolean) {
        this.state[name] = value;
    };

    is = function(name:string, value:string) : boolean {
        return this.state[name] == value;
    };

    getUsableActions() : Array<Action> {
        // get all actions with cleared preconditions
        return this.actions.filter(function(action) {
            return action.canExecute();
        });
    };
}


