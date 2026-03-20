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
        var tableQuery = 'select * from user';
        con.query(tableQuery,(error,result)=>{
            if(error)
                console.log("Error : ",error);
            else 
                // console.log(result);
            console.table(result);
                con.close();
        });
    }
});