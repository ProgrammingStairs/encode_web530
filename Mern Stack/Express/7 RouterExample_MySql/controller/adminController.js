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