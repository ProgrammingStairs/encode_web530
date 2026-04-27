import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

var app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/example",(request,response)=>{
    var email = request.query.email;
    response.send(`Hello ${email}, How are you ?`);
});

app.get("/example1",(request,response)=>{
    var email = request.query.email;
    var address = request.query.address;
    response.send(`Hello ${email}, your address is ${address}`);
});

app.get("/example2/:email",(request,response)=>{
    var email = request.params.email;
    response.send(`Hello ${email}`);
});

app.get("/example2/:email/:address",(request,response)=>{
    var email = request.params.email;
    var address = request.params.address;
    response.send(`Hello ${email} and your address is ${address}`);
});

app.post("/example3",(request,response)=>{
    var email = request.body.email;
    var address = request.body.address;
    response.send(`Hello ${email}, your address is ${address}`);
});

// http://localhost:3000/example4/
app.get("/example4/{*name}",(request,response)=>{
    var name = request.params.name ?? "no_name";
    response.send(`Hello ${name}`);
});

app.listen(process.env.PORT,()=>{
    console.log("Connection established successfully");
})