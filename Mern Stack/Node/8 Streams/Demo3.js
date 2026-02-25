// example showing the concept of streams

var fs = require("fs");
fs.mkdir("myfolder2/newFolder2",{recursive:true},(error)=>{
     if(error){
          if(error.code=="EEXIST")
               console.log("Folder already exist");
          else
               console.log("Error occured : ",error);
     }
     else
          console.log("Folder created successfully");
});