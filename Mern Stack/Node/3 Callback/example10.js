// Example showing the concept of callback 

function myFunction(callback){
    setTimeout(()=>{
        var obj = {
            name:"Andrew Anderson",
            age:45,
            address:"Indore"
        }
        callback(obj);
    },3000);
}
var myFun = (obj)=>{
    console.log(`Hello ${obj.name}, your age is ${obj.age} and you live in ${obj.address}`);
}
myFunction(myFun);