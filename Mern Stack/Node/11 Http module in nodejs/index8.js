var http = require("http"); // type:"commonjs"
var {status,type} = require("./utility/utils.js");
var dotenv = require('dotenv');
dotenv.config();

var instance = http.createServer((request,response)=>{
    response.writeHead(status.SUCCESS,type.TYPE);
    if(request.url=='/' || request.url=='/home')
        response.write("<blockquote><h2>Home Page</h2></blockquote>");

    else if(request.url=='/about')
        response.write("<blockquote><h2>About Page</h2></blockquote>");
    
    else if(request.url=='/contact')
        response.write("<blockquote><h2>Contact Page</h2></blockquote>");
    
    else if(request.url=='/services')
        response.write("<blockquote><h2>Services Page</h2></blockquote>");
    
    else if(request.url=='/faq')
        response.write("<blockquote><h2>FAQ Page</h2></blockquote>");
    
    response.end();
});
instance.listen(process.env.PORT,()=>{
    console.log("Connection established successfully");
});

