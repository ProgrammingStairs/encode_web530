import express from 'express';
import { userRegisterController,userLoginController } from '../controller/userController.js';
var userRouter = express.Router();

userRouter.use((request,response,next)=>{
    console.log("User Router executes");
    next();
});
userRouter.get("/",(request,response)=>{
    response.render("userHome.ejs",{email:request.session.email});
});
userRouter.get("/login",(request,response)=>{
    response.render("userLogin.ejs");
});
userRouter.get("/register",(request,response)=>{
    response.render("register.ejs");
});
userRouter.get("/addToDo",(request,response)=>{
    response.render("addToDo.ejs");
});

userRouter.post("/register",userRegisterController);
userRouter.post("/login",userLoginController);

export default userRouter;