import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
var app = express();
const myFun1 = function(request,response,next){
    response.writeHead(200,{'content-type':'text/html'});
    response.write("statement 1..");
    next();
};
const myFun2 = function(request,response,next){
    response.write("<br>statement 2");
    next();
};
const myFun3 = function(request,response){
    response.write("<br>statement 3");
    response.end();
};
// app.use(myFun1,myFun2); // application level middleware

app.use(myFun1); // application level middleware
app.use(myFun2);// application level middleware

app.get("/",myFun3);

app.listen(process.env.PORT,()=>{
    console.log("Connection established successfully");
});