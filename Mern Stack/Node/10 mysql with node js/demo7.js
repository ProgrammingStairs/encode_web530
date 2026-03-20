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
        var username = "Peter Parker";
        var email = "peter@gmail.com";
        var password = "peter@123";
        var address = "Indore";
        var tableQuery = 'insert into user(username,email,password,address) values("'+username+'","'+email+'","'+password+'","'+address+'")';
        con.query(tableQuery,(error,result)=>{
            if(error)
                console.log("Error : ",error);
            else 
                console.log("Data inserted successfully");
                con.close();
        });
    }
});