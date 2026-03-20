// mysql with node js

var mysql = require('mysql2');
var readLine = require("readline");
var instance = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"mysql530node"
});
       
con.connect((error)=>{
    if(error)
        console.log("Error occured : ",error);
    else 
        showMenu();
});

function showMenu(){
    instance.question("Select \n1 for Add User\n2 for Update User\n3 for Delete User\n4 for View All Users\n5 for Specific User\n\nEnter Choice : ",(choice)=>{
    switch(choice){
        case '1' : addUser();
                    break;
        case '2' : updateUser();
                    break;
        case '3' : deleteUser();
                    break;
        case '4' : viewAllUser();
                    break;
        case '5' : viewSpecificUser();
                    break;
        default : console.log("Invalid Choice");
                 con.close();
                 instance.close();
                    break;
    }
});

} 

function addUser(){
    console.log("Add user");
    showMenu();
}