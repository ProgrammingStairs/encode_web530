import student from "../model/userModel.js";

export const viewUserController = async (request,response)=>{
    try{
        const data = await student.findAll();
        var dataArray = [];
        // console.log(data);
        data.forEach((res)=>{
            dataArray.push(res.dataValues);
        })
        // console.log("--------------> ",dataArray);
        if(dataArray.length==0)
            response.render("viewUser.ejs",{dataArray,status:404});
        else
            response.render("viewUser.ejs",{dataArray,status:200});        
    }catch(error){
        console.log("Error while dealing with view user controller : ",error);        
    }
}

export const addUserController = async (request,response)=>{
    try{
        console.log("--------------------- ",request.body);
        
        const res = await student.create(request.body);
        // console.log("result : ",res);
        if(res.dataValues)
            response.render("addUser.ejs",{message:"Data inserted successfully",status:200});
        else
            response.render("addUser.ejs",{message:"Something went wrong",status:401});    
    }catch(error){
        console.log("Error : ",error);
    }
}