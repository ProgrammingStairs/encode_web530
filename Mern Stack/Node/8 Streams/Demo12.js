// example showing the concept of streams

var fs = require('fs');
var path = "myFolder1/textFile.txt";
var newPath = "myFolder1/newFile.txt";

var readStream = fs.createReadStream(path);
var writeStream = fs.createWriteStream(newPath);

readStream.pipe(writeStream);
readStream.on('end',()=>{
     console.log("Data reading completed..!!");
});
writeStream.on('finish',()=>{
     console.log("Data inserted successfully");
});