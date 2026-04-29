import con from "../connection/dbConfig.js";
export const adminLoginController = (request,response)=>{
    try{
        const {email,password} = request.body;
        const query = "select * from admin where email=? and password=?";
        const values = [email,password];
        con.query(query,values,(error)=>{
            if(error)
                console.log("Error occured : ",error);
            else{
                request.session.email = email;
                request.session.save();
                response.render("adminHome.ejs",{email});
            }
        })
    }catch(error){
        console.log("Error occured : ",error);
    }
}

export const adminLogoutController = (request,response)=>{
    try{
        request.session.email = null;
        request.session.destroy((error)=>{
            if(error)
                console.log("Error occured while logout : ",error);
            else{
                response.render("adminLogin.ejs",{message:"Logout Successfully"});
            }
        });
    }catch(error){
        console.log("Error occured : ",error);
    }
}

export const adminUserListController = (request,response)=>{
    try{
        const query = "select * from user";
        con.query(query,(error,result)=>{
            // console.log("result : ",result);
            response.render("adminUserList.ejs",{email:request.session.email,result});
        })
    }catch(error){
        console.log("Error occured in admin userlist controller : ",error);
    }
}