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
var promiseObj = myFunction();
promiseObj.then((obj)=>{
    obj.hobbies = ["Cricket","Football","Hockey"];
    return obj;
}).then((data)=>{
    console.log("User Details : ");
    console.log("Name : "+data.name);
    console.log("Age : "+data.age);
    console.log("Address : "+data.address);
    console.log("Hobbies : "+data.hobbies);   
}).catch((error)=>{
    console.log("Error : "+error);
});