// example showing the concept of fs module

var fs = require('fs');
var filename = "newFile1.txt";

console.log("Before");

fs.open(filename,'wx',(error)=>{
    if(error){
        if(error.code==="EEXIST")
            console.log("Already exist");
        else    
            console.log("Error occured : ",error);
    }
    else 
        console.log("File created successfully");
});

console.log("After");
