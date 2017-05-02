var StateMachine = (function () {
    function StateMachine() {
        this.states = {};
        this.current = null;
    }
    StateMachine.prototype.add = function (name, state) {
        this.states[name] = state;
    };
    StateMachine.prototype.enter = function (name) {
        if (this.current) {
            this.current.leave();
        }
        this.current = this.states[name];
        this.current.enter();
    };
    StateMachine.prototype.update = function () {
        if (this.current) {
            this.current.update();
        }
    };
    return StateMachine;
}());
