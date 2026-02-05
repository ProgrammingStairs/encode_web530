// example showing the concept of Promise

var num = 452;

function simpleCheck(num){
    return new Promise((resolve,reject)=>{
        (num%2==0) ? resolve("Even number") : reject("Odd number");
    });
}
console.log("Before");

var promiseObj = simpleCheck(num);
promiseObj.then((res)=>{
    console.log(res);
}).catch((error)=>{
    console.log(error);
});

console.log("After");
