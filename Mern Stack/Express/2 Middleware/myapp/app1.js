import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
var app = express();

app.get("/",function(request,response,next){
    response.writeHead(200,{'content-type':'text/html'});
    response.write("statement 1");
    next();
},function(request,response,next){
    response.write("<br>statement 2");
    next();
},function(request,response){
    response.write("<br>statement 3");
    response.end();
});

app.listen(process.env.PORT,()=>{
    console.log("Connection established successfully");
});