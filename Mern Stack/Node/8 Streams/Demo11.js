// example showing the concept of streams

var fs = require('fs');
var path = "myFolder1/textFile.txt";

var readStream = fs.createReadStream(path,"utf-8");
readStream.on('data',(chunk)=>{
     // console.log(chunk);
     // console.log(JSON.parse(chunk));
     var data = JSON.parse(chunk);
     for(var index in data){
          for(var key in data[index]){
               if(typeof data[index][key]==="object"){
                    for(var subkey in data[index][key]){
                         if(typeof data[index][key][subkey]==="object"){
                              // .....
                         }else{
                              console.log(subkey+" : "+data[index][key][subkey]);
                         }
                    }
               }else
                    console.log(key+" : "+data[index][key]);
          }
          console.log("##############################");
     }     
});