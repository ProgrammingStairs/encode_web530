import express from 'express';
import dotenv from 'dotenv';
import userRouter from './router/userRouter.js';
dotenv.config();
var app = express();
app.set("views","views");
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/user",userRouter);
app.get("/",(request,response)=>{
    response.render("index.ejs");
});
app.listen(process.env.PORT,()=>{
    console.log("Connection established successfully");
})