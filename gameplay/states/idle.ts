class IdleState
{
    _entity:any;

    constructor(entity:any)
    {
        this._entity = entity;
    }

    enter(){
        console.log(this._entity.name + " enters Idle state");
    }

    leave(){
        console.log(this._entity.name + " leaves Idle state");
    }

    update()
    {
    var plan = this._entity.plan();

        if(plan.length > 0) {
            this._entity._current_plan = plan;
            this._entity.sm.enter("moving");
        }
    }
}
/*
var IdleState = function(entity) {
    this._entity = entity;
};

IdleState.prototype.enter = function() {
    console.log(this._entity.name + " enters Idle state");
};

IdleState.prototype.leave = function() {
    console.log(this._entity.name + " leaves Idle state");
};

IdleState.prototype.update = function() {
    var plan = this._entity.plan();

    if(plan.length > 0) {
        this._entity._current_plan = plan;
        this._entity.sm.enter("moving");
    }
};
*/