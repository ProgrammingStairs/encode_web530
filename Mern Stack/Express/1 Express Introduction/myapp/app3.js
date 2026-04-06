import express from 'express';

var app = express();
// console.log(app);

app.get("/",(request,response)=>{
    response.send("<blockquote><h2>Home Page</h2></blockquote>");
});
app.post("/about",(request,response)=>{
    response.send("<blockquote><h2>About Page</h2></blockquote>");
});
app.put("/contact",(request,response)=>{
    response.send("<blockquote><h2>Contact Page</h2></blockquote>");
});
app.delete("/services",(request,response)=>{
    response.send("<blockquote><h2>Services Page</h2></blockquote>");
});
app.all("/faq",(request,response)=>{
    response.send("<blockquote><h2>FAQ Page</h2></blockquote>");
});

app.listen(3000,(request,reponse)=>{
    console.log("Connection established successfully");
});

