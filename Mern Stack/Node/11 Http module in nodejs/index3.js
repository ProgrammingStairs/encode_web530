// var http = require("http"); // type:"commonjs"
// var {status,type} = require("./utility/utils.js");
// console.log(res);

import http from 'http'; // type:"module"
import {status,type} from './utility/utils.js'; // named import

var instance = http.createServer((request,response)=>{
    response.writeHead(status.SUCCESS,type.TYPE);
    response.write("This is an example of NodeJs...");
    response.write("<h1>This is an example of NodeJs..</h1>");
    response.end();
});
instance.listen(3000,()=>{
    console.log("Connection established successfully");
});