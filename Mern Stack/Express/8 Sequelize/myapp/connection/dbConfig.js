import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    'sequelize_530',
    'root',
    'root',
    {
        host:'localhost',
        dialect:'mysql'
    }
)

sequelize.authenticate().then(()=>{
    console.log("Connection with database established successfully");  
}).catch((error)=>{
    console.log("Error occured in dbConfig.js : ",error);
});

export default sequelize;