import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
dotenv.config();
var app = express();

// Third party middleware
// app.use(bodyParser.urlencoded({extended:false}))
// app.use(bodyParser.json());

// Built in middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json());


// method : get, set username and email in params section
// app.get("/login",(request,response)=>{
//     const data = request.query;
//     console.log("username : ",data.username);
//     console.log("email : ",data.email);
//     response.send("Task completed"); 
// });

// method:post
app.post("/login",(request,response)=>{
    const data = request.body;
    console.log("Data : ",data);
    
    console.log("username : ",data.username);
    console.log("email : ",data.email);
    response.send("Task completed"); 
});

app.listen(process.env.PORT,()=>{
    console.log("Connection established successfully");
});