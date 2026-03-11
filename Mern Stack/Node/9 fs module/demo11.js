// example showing the concept of fs module

var fs = require('fs');
var record = "records.txt";

var data = fs.readFileSync(record,"utf-8");
var res=0;
var name;
for(var i=0;i<=data.length;i++){
    if(data[i]=="\n"){
        name = data.slice(res,i);
        res = i+1;
        console.log("\nFile name : "+name);
        console.log("Content : "+fs.readFileSync(name,"utf-8"));
    }
}
