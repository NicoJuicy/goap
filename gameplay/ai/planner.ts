class Planner
{

    plan(agent:Agent,goal:any) : Array<Action>
    {
        let root : NodeT = new NodeT(undefined, undefined, 0, agent.state);
        //var leaves = [];
        let leaves: Array<NodeT> = [];

        let found:boolean = this._buildGraph(root, leaves, agent.actions, goal);

        //should sort by int instead of any
        let sortedLeaves : Array<NodeT> = leaves.sort(a  => a.cost);
        //console.log(sortedLeaves);
        let cheapest :NodeT = sortedLeaves[0];
         cheapest  = leaves.sort((a,b) :any => a.cost < b.cost)[0];

        //  var cheapest = leaves.sort(function(a, b) {
        //     return a.cost < b.cost;
        // })[0];


        let plan : Array<Action> = [];

        let node : NodeT = cheapest;

        while(node) {
            if(node.action) {
                plan.unshift(node.action);
            }

            node = node.parent;
        }

        console.log(plan);

        return plan;

    }

    
    _buildGraph = function(parent:NodeT, leaves:Array<NodeT>, actions:Array<Action>, goal:any) : boolean {
        let foundOne : boolean = false;

        var that = this;

        actions.forEach(function(action) {
            if(that._inState(parent.state, action.preconditions)) {
                var currentState = that._applyState(parent.state, action.effects);
                var node = new NodeT(parent, action, parent.cost + action.cost, currentState);

                if(currentState[goal.name] == goal.value) {
                    leaves.push(node);
                    foundOne = true;
                } else {
                    var index = actions.indexOf(action);

                    var subset = actions.slice(0, index).concat(actions.slice(index + 1, actions.length));

                    var found = that._buildGraph(node, leaves, subset, goal);

                    if(found) {
                        foundOne = true;
                    }
                }
            }
        });

        return foundOne;
    };
    
    _inState = function(state:any, preconditions:any) : boolean {
        var clear = true;
        for(var cond in preconditions) {
            clear = clear && (state[cond] == preconditions[cond]);
        }

        return clear;
    };

    _applyState(old:any, newState:any) {
        var result = [];

        for(var val in old) {
            result[val] = old[val];
        }

        for(var effect in newState) {
            result[effect] = newState[effect];
        }

        return result;
    };
}
