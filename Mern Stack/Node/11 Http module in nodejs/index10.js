var http = require("http"); // type:"commonjs"
var {status,type} = require("./utility/utils.js");
var fs = require("fs");
var dotenv = require('dotenv');
dotenv.config();

var instance = http.createServer((request,response)=>{
    response.writeHead(status.SUCCESS,type.TYPE);
    if(request.url=='/' || request.url=='/home'){
        var data = fs.readFileSync("home.html",'utf-8');
            response.write(data);
    }
    else if(request.url=='/about'){
        var data = fs.readFileSync("about.html",'utf-8');
            response.write(data);
    }
    else if(request.url=='/contact'){
        var data = fs.readFileSync("contact.html",'utf-8');
            response.write(data);
    }
    else if(request.url=='/services'){
        var data = fs.readFileSync("services.html",'utf-8');
            response.write(data);
    }
    response.end();
});
instance.listen(process.env.PORT,()=>{
    console.log("Connection established successfully");
});

