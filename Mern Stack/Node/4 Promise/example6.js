// example showing the concept of async await

function myFunction(){
    return new Promise((resolve,reject)=>{
        var obj = {
            name:'Andrew Anderson',
            age:45,
            address:'Indore'
        }
        resolve(obj);
    });
}
var myFun1 = (obj)=>{
    obj.hobbies = ["Cricket","Football","Hockey"];
    return obj;
};
var myFun2 = (data)=>{
    console.log("User Details : ");
    console.log("Name : "+data.name);
    console.log("Age : "+data.age);
    console.log("Address : "+data.address);
    console.log("Hobbies : "+data.hobbies);   
}
var myFun3 = (error)=>{
    console.log("Error : "+error);
}

async function demo(){
    try{
        var obj = await myFunction();
        var recObj = myFun1(obj);
        myFun2(recObj);
    }catch(error){
        myFun3(error);
    }
}
demo();