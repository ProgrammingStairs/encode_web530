import express from 'express';
import url from 'url';
var app = express();

// http://localhost:3000/home?a=100&b=200
app.get("/home",(request,response)=>{
    const res = url.parse(request.url,true).query;
    const result = parseInt(res.a)+parseInt(res.b);
    response.send("<blockquote><h2>Home Page : "+result+"</h2></blockquote>");
});

app.listen(3000,(request,reponse)=>{
    console.log("Connection established successfully");
});