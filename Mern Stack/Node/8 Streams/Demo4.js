// example showing the concept of streams

var fs = require("fs");
var path = "myfolder2/newFolder2";
if(fs.existsSync(path)){
     console.log("Folder already exists");
}else{
     fs.mkdir(path,{recursive:true},(error)=>{
          if(error){
               if(error.code=="EEXIST")
                    console.log("Folder already exist");
               else
                    console.log("Error occured : ",error);
          }
          else
               console.log("Folder created successfully");
     });
}