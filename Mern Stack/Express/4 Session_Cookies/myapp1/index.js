import express from 'express';
import dotenv from 'dotenv';
import expressSession from 'express-session';
dotenv.config();

var app = express();

app.set("views","views");
app.set("view engine","ejs");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(expressSession({secret:process.env.SECRET,resave:true,saveUninitialized:true}));

app.get("/",(request,response)=>{
    response.render("index.ejs");
});
app.get("/login",(request,response)=>{
    response.render("login.ejs");
});
app.post("/login",(request,response)=>{
    const {email,password} = request.body;
    console.log("Email : ",email);
    console.log("Password : ",password);
    
})

app.listen(process.env.PORT,()=>{
    console.log("Connection established successfully");
})