// Example showing the concept of callback 

function myFunction(array,callback){
    callback(array.sort());
}
var array = ["mango","apple","banana"];
var myFun = (res)=>{
    console.log("Ascending order : "+res);
}
myFunction(array,myFun);