// how to take values from user in node js

var readLine = require("readline");
var interface = readLine.createInterface({
    input : process.stdin,
    output : process.stdout
});

interface.question("Enter Name : ",(name)=>{
    console.log("Welcome ",name);
    interface.close();    
});