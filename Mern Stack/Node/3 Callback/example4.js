// Example showing the concept of callback

function myFunction(greetMsg,msg,callback){
    console.log(greetMsg);
    setTimeout(()=>{
        callback(msg);
    },3000);
}

const greetMessage = "Loading....";
const message = "Email Sent";
const myFun = (message)=>{
    console.log(message+" | Task Completed");
}

myFunction(greetMessage,message,myFun);