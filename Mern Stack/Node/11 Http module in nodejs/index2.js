var http = require("http");
var instance = http.createServer((request,response)=>{
    response.writeHead(200,{'content-type':'text/html'});
    response.write("This is an example of NodeJs");
    response.write("<h1>This is an example of NodeJs</h1>");
    response.end();
});
instance.listen(3000,()=>{
    console.log("Connection established successfully");
});