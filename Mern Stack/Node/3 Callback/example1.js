// Example showing the concept of callback

function myFunction(callback){
    console.log("This is my function");
    callback();
}
myFunction(()=>{
    console.log("This is an example of callback");
});