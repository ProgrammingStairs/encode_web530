// example showing the concept of Promise

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

var promiseObj = myFunction();
promiseObj.then(myFun1)
            .then(myFun2)
                .catch(myFun3);