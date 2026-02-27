// example showing the concept of streams

var fs = require('fs');
var path = "myFolder1/textFile.txt";

var obj = {
     name:"Andrew Anderson",
     age:78,
     email:"andrew@gmail.com",
     address:{
          city:"Indore",
          state:"Madhya Pradesh"
     }
}
var writeStream = fs.createWriteStream(path);
writeStream.write(JSON.stringify(obj));
writeStream.end();
writeStream.on('finish',()=>{
     console.log("Data inserted successfully");
})