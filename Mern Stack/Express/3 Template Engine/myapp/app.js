import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
var app = express();
app.set("views","views");
app.set("view engine","ejs");

const bookData = [{
    bookName : "C Language",
    authorName : "Dennis Ritchie",
    price : 10000
},{
    bookName : "C Language",
    authorName : "Dennis Ritchie",
    price : 10000
},{
    bookName : "C Language",
    authorName : "Dennis Ritchie",
    price : 10000
},{
    bookName : "C Language",
    authorName : "Dennis Ritchie",
    price : 10000
},{
    bookName : "C Language",
    authorName : "Dennis Ritchie",
    price : 10000
}];

app.get("/",(request,response)=>{
    response.render("index.ejs",{bookData});
});

app.listen(process.env.PORT,()=>{
    console.log("Connection established successfully");
});