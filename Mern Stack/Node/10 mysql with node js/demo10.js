// mysql with node js

var mysql = require('mysql2');
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"mysql530node"
});

con.connect((error)=>{
    if(error){
        console.log("Error : ",error);
    }else{
        var tableQuery = 'delete from user where uid=?';
        var value = [3];
        con.query(tableQuery,value,(error,result)=>{
            if(error)
                console.log("Error : ",error);
            else 
                console.log("Data deleted successfully");
                con.close();
        });
    }
});