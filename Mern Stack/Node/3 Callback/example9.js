// Example showing the concept of callback 

function myFunction(array,callback){
    callback(array.sort((a,b)=>{
        return b-a;
    }));
}
var array = [34,54,123,4,567,9];
var myFun = (res)=>{
    console.log("Ascending order : "+res);
}
myFunction(array,myFun);