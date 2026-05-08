import express from 'express';
import { viewUserController,addUserController } from '../controller/userController.js';
var userRouter = express.Router();

userRouter.get("/addUser",(request,response)=>{
    response.render("addUser.ejs",{message:"",status:''});
});
userRouter.post("/addUser",addUserController);
userRouter.get("/viewUser",viewUserController);

export default userRouter;