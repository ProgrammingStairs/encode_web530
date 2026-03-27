var http = require("http"); // type:"commonjs"
var {status,type} = require("./utility/utils.js");
var fs = require("fs");
var dotenv = require('dotenv');
dotenv.config();

var instance = http.createServer((request,response)=>{
    response.writeHead(status.SUCCESS,type.TYPE);
    if(request.url=='/' || request.url=='/home'){
        fs.readFile("home.html",(error,result)=>{
            response.write(result);
            response.end();
        });
    }
    else if(request.url=='/about'){
        fs.readFile("about.html",(error,result)=>{
            response.write(result);
            response.end();
        });
    }
    else if(request.url=='/contact'){
        fs.readFile("contact.html",(error,result)=>{
            response.write(result);
            response.end();
        });
    }
    else if(request.url=='/services'){
        fs.readFile("services.html",(error,result)=>{
            response.write(result);
            response.end();
        });
    }
    
});
instance.listen(process.env.PORT,()=>{
    console.log("Connection established successfully");
});

