// example showing the concept of fs module

var fs = require('fs');
var filename = "newFile.txt";

console.log("Before");

if(fs.existsSync(filename))
    console.log("Already exist");
else{
    fs.open(filename,'w',(error)=>{
        if(error)
            console.log("Error : ",error);
        else 
            console.log("File created successfully");
    });
}
console.log("After");
