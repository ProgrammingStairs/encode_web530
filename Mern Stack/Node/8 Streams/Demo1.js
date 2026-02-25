// example showing the concept of streams

var fs = require("fs");
fs.mkdir("myfolder",(error)=>{
     if(error)
          console.log("Error occured : ",error);
     else
          console.log("Folder created successfully");
});