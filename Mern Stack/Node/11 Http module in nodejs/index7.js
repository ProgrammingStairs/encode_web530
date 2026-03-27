var http = require("http"); // type:"commonjs"
var {status,type} = require("./utility/utils.js");
var dotenv = require('dotenv');
dotenv.config();

var instance = http.createServer((request,response)=>{
    response.writeHead(status.SUCCESS,type.TYPE);
    response.write("<br>request.url : "+request.url);
    response.write("<br>request.method : "+request.method);
    response.write("<br>request.headers : "+request.headers);
    // console.log("request.headers : ",request.headers);
    
    response.write("<br>request.headers.hostname : "+request.headers.host);
    
    response.end();
});
instance.listen(process.env.PORT,()=>{
    console.log("Connection established successfully");
});

/*
process : {
   env : {
     PORT : 3000
   }
}
*/