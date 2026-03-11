// example showing the concept of fs module

var fs = require('fs');
var fileName = "myFile.txt";
var content = " Now data is going to be append";

console.log("Before");
//fs.writeFileSync(fileName,content);
fs.appendFileSync(fileName,content);
console.log("Data Inserted Successfully");
console.log("After");

