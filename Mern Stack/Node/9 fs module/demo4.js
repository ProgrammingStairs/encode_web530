// example showing the concept of fs module

var fs = require('fs');
var filename = "newFile1.txt";

console.log("Before");

fs.unlink(filename,(error)=>{
    if(error){
        if(error.code==="ENOENT")
            console.log("File Not Exist");
        else    
            console.log("Error occured : ",error);
    }
    else 
        console.log("File deleted successfully");
});

console.log("After");
