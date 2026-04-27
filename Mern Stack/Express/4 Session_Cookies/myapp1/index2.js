import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();

var app = express();
app.set("views","views");
app.set("view engine","ejs");

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

app.get("/",(request,response)=>{
    response.send("This is an example of Cookie in Express Js");
});

app.get("/addCookie",(request,response)=>{
    response.cookie("cookie1","andrew@gmail.com",{maxAge:360000});
    response.cookie("cookie2","EMP10101",{maxAge:360000});
    response.send("Cookies Added Successfully");
});
app.get("/viewCookie",(request,response)=>{
    response.send(request.cookies);
})
app.get("/clearCookie",(request,response)=>{
    response.clearCookie("cookie1");
    response.send("Cookie deleted successfully");
});
app.listen(process.env.PORT,()=>{
    console.log("Connection established successfully");
})