// example showing the concept of streams
// transform stream

var fs = require("fs");
var zlib = require("zlib");
var zlibObj = zlib.createGzip();

var file1 = "myFolder1/newFile.txt";
var file2 = "myFolder1/newFileZip.gz";

var readStream = fs.createReadStream(file1);
var writeStream = fs.createWriteStream(file2);

readStream.pipe(zlibObj).pipe(writeStream);

writeStream.on('finish',()=>{
     console.log("Data transformation completed");
});