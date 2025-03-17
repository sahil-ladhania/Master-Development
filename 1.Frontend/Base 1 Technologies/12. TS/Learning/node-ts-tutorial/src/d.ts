// Enums
enum Direction{
    UP,
    DOWN,
    RIGHT,
    LEFT
}
function doSomething(key:Direction){
    if(key === Direction.UP){
        console.log("Go UP");
    }
    else if(key === Direction.DOWN){
        console.log("Go Down")
    }
}
doSomething(Direction.DOWN);