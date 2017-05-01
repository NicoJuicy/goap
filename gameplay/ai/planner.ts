class Planner
{

    plan(agent:any,goal:any)
    {
       var root = new NodeT(undefined, undefined, 0, agent.state);

        var leaves = [];

        var found = this._buildGraph(root, leaves, agent.actions, goal);

        //should sort by int instead of any
        var sortedLeaves = leaves.sort(a  => a.cost);
        //console.log(sortedLeaves);
        var cheapest = sortedLeaves[0];
        var cheapest = leaves.sort((a,b) :any => a.cost < b.cost)[0];

        //  var cheapest = leaves.sort(function(a, b) {
        //     return a.cost < b.cost;
        // })[0];


        var plan = [];

        var node = cheapest;

        while(node) {
            if(node.action) {
                plan.unshift(node.action);
            }

            node = node.parent;
        }

        console.log(plan);

        return plan;

    }

    
    _buildGraph = function(parent:any, leaves:any, actions:any, goal:any) {
        var foundOne = false;

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
    _inState = function(state:any, preconditions:any) {
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
