import con from "../connection/dbConfig.js";
export const userRegisterController = (request,response)=>{
    try{
        const username = request.body.username;
        const email = request.body.email;
        const password = request.body.password;
        const address = request.body.address;
        const query = "insert into user(username,email,password,address) values(?,?,?,?)";
        const values = [username,email,password,address];
        con.query(query,values,(error)=>{
            if(error)
                console.log("Error occured : ",error);
            else
                response.render("userLogin.ejs");
        });
    }catch(error){
        console.log("Error occured in userRegistercontroller : ",error);
    }
}

export const userLoginController = (request,response)=>{
    try{
        const {email,password} = request.body;
        const query = "select * from user where email=? and password=?";
        const values = [email,password];
        con.query(query,values,(error,result)=>{
            if(error)
                console.log("Error in user login controller : ",error);
            else{
                request.session.email = email;
                request.session.save();
                response.render("userHome.ejs",{email:request.session.email});
            }
        });
    }catch(error){
        console.log("Error in user Login controller : ",error);
    }
}