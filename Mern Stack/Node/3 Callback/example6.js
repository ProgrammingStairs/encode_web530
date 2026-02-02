// Example showing the concept of callback

function myFun(a,b,task,callback){
    var res; 
    switch(task){
        case "addition" : res = a+b; break;
        case "subtraction" : res = a-b; break;
        case "multiplication" : res = a*b; break;
        case "division" : res = a/b; break;
        case "modulus" : res = a%b; break;
        default : res="Invalid Operation"; break;
    }
    callback(res);
}

var a = 5,b = 2;
var task = "multiplication";
var printResult = (res)=>{
    console.log("Result : "+res);
}
myFun(a,b,task,printResult);