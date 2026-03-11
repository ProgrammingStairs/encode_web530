// example showing the concept of fs module

var fs = require('fs');
var fileName = "myFile.txt";
var content = " Now data is going to be append";

fs.readFile(fileName,"utf-8",(error,data)=>{
    if(error){
            console.log("Error occured : ",error);
    }
    else 
        console.log("Data : "+data);
});

