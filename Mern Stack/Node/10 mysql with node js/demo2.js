// how to take values from user in node js

var readLine = require("readline");
var interface = readLine.createInterface({
    input : process.stdin,
    output : process.stdout
});

interface.question("Enter first number : ",(num1)=>{
   interface.question("Enter second number : ",(num2)=>{
        console.log(`Sum : ${parseInt(num1)+parseInt(num2)}`);
        interface.close();
    });     
});