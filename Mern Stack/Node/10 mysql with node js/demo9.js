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
        var username = "Jack Jackson";
        var email = "jack@gmail.com";
        var password = "jack@123";
        var address = "Indore";
        var tableQuery = 'update user set username=?,email=?,password=?,address=? where uid=2';
        var values = [username,email,password,address];
        con.query(tableQuery,values,(error,result)=>{
            if(error)
                console.log("Error : ",error);
            else 
                console.log("Data updated successfully");
                con.close();
        });
    }
});