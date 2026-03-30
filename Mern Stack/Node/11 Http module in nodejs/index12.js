var http = require("http"); // type:"commonjs"
var {status,type} = require("./utility/utils.js");
var fs = require("fs");
var url = require("url");
var dotenv = require('dotenv');
dotenv.config();

var instance = http.createServer((request,response)=>{
    response.writeHead(status.SUCCESS,type.TYPE);
    //http://localhost:3000/home?a=100&b=200
    var requestedURL = url.parse(request.url,true);
    // console.log(requestedURL);
    console.log("pathname : ",requestedURL.pathname);
    console.log("typeof pathname : ",typeof requestedURL.pathname);
    
    console.log("query : ",requestedURL.query);
    console.log("typeof query : ",typeof requestedURL.query);
    var a = parseInt(requestedURL.query.a);
    var b = parseInt(requestedURL.query.b);
    console.log("Sum : "+(a+b));

});
instance.listen(process.env.PORT,()=>{
    console.log("Connection established successfully");
});

