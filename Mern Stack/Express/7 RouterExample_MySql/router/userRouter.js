import express from 'express';
var userRouter = express.Router();

userRouter.use((request,response,next)=>{
    console.log("User Router executes");
    next();
});
userRouter.get("/login",(request,response)=>{
    response.render("userLogin.ejs");
});
userRouter.get("/register",(request,response)=>{
    response.render("register.ejs");
});

export default userRouter;