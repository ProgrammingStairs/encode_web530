// example showing the concept of streams

var fs = require('fs');
var path = "myFolder1/textFile.txt";

var readStream = fs.createReadStream(path,"utf-8");
readStream.on('data',(chunk)=>{
     // console.log(chunk);
     var obj = JSON.parse(chunk);
     // console.log(obj);
     console.log("Name : "+obj.name);
     console.log("Age : "+obj.age);
     console.log("Email : "+obj.email);
     console.log("Address(city) : "+obj.address.city);
     console.log("Address(state) : "+obj.address.state);
});