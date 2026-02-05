// example showing the concept of Promise

var p = 1000;
var r = 2.34;
var t = 5;

function simpleInterest(p,r,t){
    return new Promise((resolve,reject)=>{
        var si = (p*r*t)/100;
        resolve(si);
    });
}
var promiseObj = simpleInterest(p,r,t);
promiseObj.then((res)=>{
    console.log("Simple Interest : "+res);
}).catch((error)=>{
    console.log("Error occured : "+error);
});