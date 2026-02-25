// example showing the concept of streams

var fs = require("fs");
var path = "myfolder/newFolder/file2.txt";
var writeStream;
function writeContent(){
     // writeStream = fs.createWriteStream(path);
     writeStream = fs.createWriteStream(path,{flags:'a'});
     writeStream.write(" This is an example of create write stream updated content");     
}
if(fs.existsSync(path)){
     console.log("File already exists");
     writeContent();
}else{
     console.log("File creation takes place | if not exist...");
     writeContent();
}
writeStream.end();
writeStream.on('finish',()=>{
     console.log("Data inserted successfully");          
});