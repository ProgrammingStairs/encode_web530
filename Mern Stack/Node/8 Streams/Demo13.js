// example showing the concept of streams
//  duplex stream

const { read } = require('fs');
var {Duplex} = require('stream');
var path = "myFolder1/textFile.txt";

var duplexInstance = new Duplex({
     write(data){
          chunk = data
     },
     read(){
          this.push(chunk);
          this.push(null);
     }
});

duplexInstance.write("This is an example of duplex stream");
duplexInstance.on('data',(chunk)=>{
     console.log("Data : "+chunk);
});