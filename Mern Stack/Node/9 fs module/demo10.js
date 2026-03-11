// example showing the concept of fs module

var fs = require('fs');
var record = "records.txt";

console.log("Before");
var data = fs.readFileSync(record,"utf-8");
console.log("Data : "+data);
console.log("After");

