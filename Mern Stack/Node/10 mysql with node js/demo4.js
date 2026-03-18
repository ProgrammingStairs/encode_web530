// mysql with node js

var mysql = require('mysql2');
var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root'
});

con.connect((error)=>{
    if(error)
        console.log("Error : ",error);
    else {
        console.log("Connection established successfully");
        var sqlQuery = "create database if not exists mysql530node";
        con.query(sqlQuery,(error,result)=>{
            if(error)
                console.log("Error : ",error);
            else{
                if(result.warningStatus==1)
                    console.log("Database already exist");
                else
                    console.log("Data base created successfully");
                con.close();
            }
        });
    }
});
