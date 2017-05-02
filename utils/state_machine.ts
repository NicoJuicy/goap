// Every object that offers the following methods can be used as a State:
// enter, leave, update

class StateMachine{
    states:any;
    current:IActionState;

    constructor(){
        this.states = {};
        this.current = null;
    }

    add(name:any,state:IActionState)
    {
         this.states[name] = state;
    }

    enter(name:any)
    {
         if(this.current) {
            this.current.leave();
        }

        this.current = this.states[name];
        this.current.enter();
    }

    update()
    {
        if(this.current) {
            this.current.update();
        }
    }
}
/*
var StateMachine = function() {
    this.states = {};
    this.current = null;
};

StateMachine.prototype.add = function(name, state) {
    this.states[name] = state;
}

StateMachine.prototype.enter = function(name) {
    if(this.current) {
        this.current.leave();
    }

    this.current = this.states[name];
    this.current.enter();
}

StateMachine.prototype.update = function() {
    if(this.current) {
        this.current.update();
    }
}
*/