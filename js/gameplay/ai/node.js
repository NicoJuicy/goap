var NodeT = (function () {
    function NodeT(parent, action, cost, state) {
        this.parent = parent;
        this.action = action;
        this.cost = cost;
        this.state = state;
    }
    return NodeT;
}());
