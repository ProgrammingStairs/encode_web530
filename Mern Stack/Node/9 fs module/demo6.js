// example showing the concept of fs module

var fs = require('fs');
var fileName = "myFile.txt";
var content = " Now data is going to be append";

// fs.writeFile(fileName,content,(error)=>{
//     if(error){
//             console.log("Error occured : ",error);
//     }
//     else 
//         console.log("Data Inserted Successfully");
// });

fs.appendFile(fileName,content,(error)=>{
    if(error){
            console.log("Error occured : ",error);
    }
    else 
        console.log("Data Inserted Successfully");
});

