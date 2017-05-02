interface IActionState
{
    enter();
    leave();
    update();
}

/*
interface IAction{
    addEffect(name:string,value:boolean);
    addPrecondition(name:string,value:boolean);
    execute();
    canExecute() : boolean;
}*/