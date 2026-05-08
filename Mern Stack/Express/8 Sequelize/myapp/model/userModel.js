import { DataTypes } from "sequelize";
import sequelize from "../connection/dbConfig.js";

const student = sequelize.define("user",{
    username:{
        type:DataTypes.STRING,
        required:true,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        required:true,
        allowNull:false,
        primaryKey:true
    },
    password:{
        type:DataTypes.STRING,
        required:true,
        allowNull:false
    },
    address:{
        type:DataTypes.STRING,
        required:true,
        allowNull:false
    }
},{tableName:"user"});

student.sequelize.sync().then(()=>{
    console.log("Table created successfully");
}).catch((error)=>{
    console.log("Error in userModel : ",error);
});

export default student;