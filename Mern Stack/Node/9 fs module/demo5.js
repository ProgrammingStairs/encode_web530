// example showing the concept of fs module

var fs = require('fs');
var oldFileName = "newFile.txt";
var newFileName = "myFile.txt";

console.log("Before");

fs.rename(oldFileName,newFileName,(error)=>{
    if(error){
        if(error.code==="ENOENT")
            console.log("File Not Exist");
        else    
            console.log("Error occured : ",error);
    }
    else 
        console.log("File renamed successfully");
});

console.log("After");
