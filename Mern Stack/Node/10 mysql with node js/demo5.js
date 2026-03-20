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
        var tableQuery = 'create table user(uid int primary key auto_increment,username varchar(45) not null,email varchar(45) not null,password varchar(45) not null,address varchar(45) not null)';
        con.query(tableQuery,(error,result)=>{
            if(error)
                console.log(error.sqlMessage);
            else 
                console.log("Table created successfully");
                con.close();
        });
    }
});