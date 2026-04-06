import express from 'express';

var app = express();
// console.log(app);

app.get("/",(request,response)=>{
    response.send("<blockquote><h2>Home Page</h2></blockquote>");
});
app.get("/about",(request,response)=>{
    response.send("<blockquote><h2>About Page</h2></blockquote>");
});
app.get("/contact",(request,response)=>{
    response.send("<blockquote><h2>Contact Page</h2></blockquote>");
});
app.get("/services",(request,response)=>{
    response.send("<blockquote><h2>Services Page</h2></blockquote>");
});

app.listen(3000,(request,reponse)=>{
    console.log("Connection established successfully");
});