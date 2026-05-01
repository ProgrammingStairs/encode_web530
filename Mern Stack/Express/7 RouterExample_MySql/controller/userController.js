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

export const userAddToDoController = (request,response)=>{
    try{
        const email = request.session.email;
        const category = request.body.category;
        const task = request.body.task;
        const description = request.body.description;
        const priority = request.body.priority;
        const query = "insert into addtodo(email,category,task,description,priority) values(?,?,?,?,?)";
        const values = [email,category,task,description,priority];
        con.query(query,values,(error)=>{
            if(error)
                console.log("Error occured : ",error);
            else{
                const query = "select * from addtodo where email = ?";
                const email = [request.session.email];
                con.query(query,email,(error,addToDoArray)=>{
                    if(error)
                        console.log("Error occured in userAddtodocontroller: ",error);
                    else
                        response.render("userViewToDo.ejs",{addToDoArray});
                })
            }
        });
    }catch(error){
        console.log("Error occured in userAddToDocontroller : ",error);
    }
}

export const viewToDoController = (request,response)=>{
    try{
        const query = "select * from addtodo where email = ?";
        const email = [request.session.email];
        con.query(query,email,(error,viewToDoArray)=>{
            if(error)
                console.log("Error occured in viewToDocontroller: ",error);
            else
                response.render("userViewToDo.ejs",{viewToDoArray});
        });
    }catch(error){
        console.log("Error occured in viewToDocontroller : ",error);
    }
}

export const userLogoutController = (request,response)=>{
    try{    
        request.session.email=null;
        request.session.destroy((error)=>{
            if(error)
                console.log("Error occured : ",error);
            else 
                response.render("index.ejs");
        });
    }catch(error){
        console.log("Error occured in userLogoutcontroller : ",error);
    }
}

