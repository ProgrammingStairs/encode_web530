import express from 'express';

var app = express();
// console.log(app);

app.get("/",(request,response)=>{
    // response.writeHead(200,{'content-type':'text/html'});
    // response.write("Hello User <h2>Welcome User</h2>");
    // response.end();

    // response.send("Hello User <h2>Welcome User...</h2>");
    // response.json({"message":"Hello User Welcome User.."});
    // response.send({message:"Hello User, Welcome User...."});
// response.status(200).send({message:"Hello User ,,Welcome User...."});
response.status(200).json({message:"Hello User,Welcome User...."});
    
});

app.listen(3000,(request,reponse)=>{
    console.log("Connection established successfully");
});