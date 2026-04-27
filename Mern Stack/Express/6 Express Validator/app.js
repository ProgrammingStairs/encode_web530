import express from 'express';
import dotenv from 'dotenv';
import Validator from 'express-validator';
const {check,validationResult} = Validator;
dotenv.config();
var app = express();
app.set("views","views");
app.set("view engine","ejs");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",(request,response)=>{
    response.render("index.ejs");
});
app.get("/register",(request,response)=>{
    response.render("register.ejs");
});
app.post("/viewInfo",[
    check("username","Enter Username").not().isEmpty(),
    check("email","Enter Email").not().isEmpty(),
    check("password","Enter Password").not().isEmpty().isLength({min:6,max:10}),
    check("contact","Enter Contact").custom((value)=>{
        var reg = /^[6789][0-9]{9}$/;
        if(reg.test(value))
            return true;
        else 
            return false;
    })
],(request,response)=>{
    console.log("gets entry");
    
    var error = validationResult(request);
    if(!error.isEmpty()){
        console.log("Error occured : ", error);
        var errMessage='';
        error.errors.forEach((err)=>{
            errMessage+=err.msg+"<br>";
        });
        response.send("Something went wrong<br>"+errMessage);
    }else{
        response.send("Registration Successfull");
    }
});

app.listen(process.env.PORT,()=>{
    console.log("Connection established successfully");
});