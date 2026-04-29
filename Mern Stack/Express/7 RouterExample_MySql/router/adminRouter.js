import express from 'express';
import { adminLoginController, adminLogoutController,adminUserListController } from '../controller/adminController.js';
var adminRouter = express.Router();

adminRouter.use((request,response,next)=>{
    console.log("Admin Router executes");
    next();
});
adminRouter.get("/",(request,response)=>{
    response.render("adminHome.ejs",{email:request.session.email});
});
adminRouter.get("/login",(request,response)=>{
    response.render("adminLogin.ejs",{message:""});
});
adminRouter.get("/userList",adminUserListController);

adminRouter.post("/login",adminLoginController);
adminRouter.get("/logout",adminLogoutController);

export default adminRouter;