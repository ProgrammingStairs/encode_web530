var http = require("http");
const instance = http.createServer((request,response)=>{

});

instance.listen(3000,()=>{
    console.log("connection established successfully");
});