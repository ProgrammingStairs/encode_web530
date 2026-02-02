// Example showing the concept of callback

function myFunction(i,callback){
    var x = setInterval(()=>{
        if(i<=10){
            callback(i);
            i++;
        }else{
            clearInterval(x);
        }
    },1000);
}

var i=1;
var myFun = function(value){
    console.log(value);
}
myFunction(i,myFun);