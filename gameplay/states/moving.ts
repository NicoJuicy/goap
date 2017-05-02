//import * as Phaser from "../../libs/phaser.js";

class MovingState implements IActionState
{
    _entity:any;

    constructor(entity:any)
    {
        this._entity = entity;
    }

    enter()
    {
        console.log(this._entity.name + " enters Moveing state");

        this._entity._target = this._entity._current_plan[0]._position;
        this._entity._sprite.body.moves = true;
    }

    leave(){
        console.log(this._entity.name + " leaves Moveing state");
    }
    
    update(){
        if(this._entity._target) {
            var t =  this._entity._target;
            this._entity._game.physics.arcade.moveToXY(this._entity._sprite, t.x, t.y, 240);

            var p = this._entity._sprite.position;

            var dist = Phaser.Math.distance(p.x, p.y, t.x, t.y);

            if(dist <= 10) {
                this._entity._sprite.body.moves = false;
                this._entity._target = null;
                this._entity.sm.enter("action");
            }
        }
    }
}
/*
var MovingState = function(entity) {
    this._entity = entity;
};

MovingState.prototype.enter = function() {
    console.log(this._entity.name + " enters Moveing state");

    this._entity._target = this._entity._current_plan[0]._position;
    this._entity._sprite.body.moves = true;
};

MovingState.prototype.leave = function() {
    console.log(this._entity.name + " leaves Moveing state");
};

MovingState.prototype.update = function() {
    if(this._entity._target) {
        var t =  this._entity._target;
        this._entity._game.physics.arcade.moveToXY(this._entity._sprite, t.x, t.y, 240);

        var p = this._entity._sprite.position;

        var dist = Phaser.Math.distance(p.x, p.y, t.x, t.y);

        if(dist <= 10) {
            this._entity._sprite.body.moves = false;
            this._entity._target = null;
            this._entity.sm.enter("action");
        }
    }
};
*/