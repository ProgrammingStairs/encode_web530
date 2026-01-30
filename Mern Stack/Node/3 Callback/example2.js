// Example showing the concept of callback

function resultantFun(a,b,callback){
    console.log("value of a : "+a);
    console.log("value of b : "+b);
    callback(a+b);
}
var a = 100;
var b = 456;
var res = (result)=>{
    console.log("Result : "+result);
}
resultantFun(a,b,res);
