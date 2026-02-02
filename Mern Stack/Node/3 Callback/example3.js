// Example showing the concept of callback

function gotoroom(callback){
    console.log("gotoroom");
    callback(wonprize);
}
function removegarbage(callback){
    console.log("remove garbage");
    callback();
}
function wonprize(){
    console.log("won prize");
}
gotoroom(removegarbage);