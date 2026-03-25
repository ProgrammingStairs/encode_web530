var http = require("http");
var instance = http.createServer((request,response)=>{
    response.write("This is an example of NodeJs");
    response.end();
});
instance.listen(3000,()=>{
    console.log("Connection established successfully");
});