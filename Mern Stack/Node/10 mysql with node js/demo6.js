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
        var tableQuery = 'insert into user(username,email,password,address) values("Andrew Anderson","andrew@gmail.com","andrew@123","Indore MP")';
        con.query(tableQuery,(error,result)=>{
            if(error)
                console.log("Error : ",error);
            else 
                console.log("Data inserted successfully");
                con.close();
        });
    }
});