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
    response.render("index.ejs",{message:""});
});
app.get("/login",(request,response)=>{
    response.render("login.ejs");
});
app.post("/login",(request,response)=>{
    const {email,password} = request.body;
    // console.log("Email : ",email);
    // console.log("Password : ",password);
    if(email=="andrew@gmail.com" && password=="andrew@123"){
        request.session.email = email;
        request.session.save();
        response.render("profile.ejs",{email:request.session.email});
    }else{
        response.render("index.ejs",{message:"Credential Not Matched"});    
    }
});
app.get("/profile",(request,response)=>{
    response.render("profile.ejs",{email:request.session.email});
});
app.get("/logout",(request,response)=>{
    request.session.email = null;
    request.session.destroy((error)=>{
        if(error)
            console.log("Error occured : ",error);
        else{
            console.log("Logout Successfully");
            response.render("index.ejs",{message:"Logout Successfully"});
        } 
    });
});
app.listen(process.env.PORT,()=>{
    console.log("Connection established successfully");
})