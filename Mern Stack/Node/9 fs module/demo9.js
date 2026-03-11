// example showing the concept of fs module

var fs = require('fs');
var fileName = new Date().getTime()+"_file.txt";
var content = "Data is going to be inserted in "+fileName;
var record = "records.txt";

console.log("Before");
fs.writeFileSync(fileName,content);
fs.appendFileSync(record,fileName+"\n");
console.log("Data Inserted Successfully");
console.log("After");

