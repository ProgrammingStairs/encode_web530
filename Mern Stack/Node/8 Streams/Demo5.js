// example showing the concept of streams

var fs = require("fs");
var path = "myfolder/newFolder/file.txt";
if(fs.existsSync(path)){
     console.log("File already exists");
}else{
     fs.createWriteStream(path);
     console.log("File created successfully");
     
}