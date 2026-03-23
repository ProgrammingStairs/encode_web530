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
    instance.question("\nSelect \n1 for Add User\n2 for Update User\n3 for Delete User\n4 for View All Users\n5 for Specific User\n6 for Exit\n\nEnter Choice : ",(choice)=>{
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
        case '6' : 
                 con.close();
                 instance.close();
                    break;
        default : console.log("Invalid Choice");
                 con.close();
                 instance.close();
                    break;
    }
});

} 

function addUser(){
    instance.question("Enter Username : ",(username)=>{
       instance.question("Enter Email : ",(email)=>{
        instance.question("Enter Password : ",(password)=>{
         instance.question("Enter Address : ",(address)=>{
            var query = "insert into user(username,email,password,address) values(?,?,?,?)";
            var values = [username,email,password,address];
            con.query(query,values,(error,result)=>{
                if(error){
                    console.log("Error while inserting data");
                    showMenu();
                }else{
                    console.log("Data inserted successfully");
                    showMenu();
                }
            });
         });
        });
       }); 
    });
}

function updateUser(){
    instance.question("Enter Email whose data you want to update : ",(email)=>{
           var query = "select * from user where email=?";
            var values = [email];
            con.query(query,values,(error,result)=>{
                if(error)
                    console.log("Error while updating data");
                else{
                    // console.log("result : ",result);
                    if(result.length==0){
                        console.log("Email does not exist");                        
                        showMenu();
                    }else{
                    instance.question("Enter Username : ",(username)=>{
                            instance.question("Enter Password : ",(password)=>{
                            instance.question("Enter Address : ",(address)=>{
                                var query = "update user set username=?,password=?,address=? where email=?";
                                var values = [username,password,address,email];
                                con.query(query,values,(error,result)=>{
                                    if(error)
                                        console.log("Error while updating data");
                                    else{
                                        console.log("Data updated successfully");
                                        showMenu();
                                    }
                                });
                            });
                            });
                        }); 
                    }
                }
            });
        
    });
}

function deleteUser(){
    instance.question("Enter Email which you want to delete : ",(email)=>{
           var query = "select * from user where email=?";
            var values = [email];
            con.query(query,values,(error,result)=>{
                if(error)
                    console.log("Error while deleting data");
                else{
                    // console.log("result : ",result);
                    if(result.length==0){
                        console.log("Email does not exist");                        
                        showMenu();
                    }else{
                        var query = "delete from user where email=?";
                        var values = [email];
                        con.query(query,values,(error,result)=>{
                            if(error)
                                console.log("Error while deleting data");
                            else{
                                console.log("Data deleted successfully");
                                showMenu();
                            }
                        });
                    }
                }
            });
    });
}

function viewAllUser(){
    var query = "select * from user";
    con.query(query,(error,result)=>{
        if(error)
            console.log("Error while fetching data");
        else{
            console.table(result);
            showMenu();
        }
    });
}

function viewSpecificUser(){
    instance.question("Enter Email whose data you want to view : ",(email)=>{
           var query = "select * from user where email=?";
            var values = [email];
            con.query(query,values,(error,result)=>{
                if(error)
                    console.log("Error while updating data");
                else{
                    // console.log("result : ",result);
                    if(result.length==0){
                        console.log("Email does not exist");  
                        showMenu();                      
                    }
                    else{
                        console.table(result);
                        showMenu();
                    }
                }
            });        
    });
}
