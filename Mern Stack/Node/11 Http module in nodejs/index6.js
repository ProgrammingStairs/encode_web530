var http = require("http"); // type:"commonjs"
var {status,type} = require("./utility/utils.js");
var dotenv = require('dotenv');
dotenv.config();

var instance = http.createServer((request,response)=>{
    response.writeHead(status.SUCCESS,type.TYPE);
    response.write("This is an example of NodeJs...");
    response.write("<h1>This is an example of NodeJs..</h1>");
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
