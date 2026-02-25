// example showing the concept of streams

var fs = require("fs");
var path = "myfolder/newFolder/file2.txt";

// readStream = fs.createReadStream(path);
// readStream.on('data',(chunk)=>{
//      // console.log(chunk);
//      // console.log(""+chunk);
//      console.log(chunk.toString());
// });

readStream = fs.createReadStream(path,"utf-8");
readStream.on('data',(chunk)=>{
     console.log(chunk);
});

readStream.on('end',()=>{
     console.log("Data reading completed..!!");
});

readStream.on('error',()=>{
     console.log("Error while reading data..!!");
});