import http from "http"; // type:"module"
import { status, type } from "./utility/utils.js";
import fs from "fs";
import url from "url";
import dotenv from 'dotenv';
dotenv.config();

var instance = http.createServer((request, response) => {
    var requestedURL = url.parse(request.url,true);
    if (requestedURL.pathname == '/' || requestedURL.pathname == '/home') {
    response.writeHead(status.SUCCESS, type.TYPE);
        var data = fs.readFileSync("home1.html", 'utf-8');
        response.write(data);
        response.end();
    }
    else if (requestedURL.pathname == '/register') {
    response.writeHead(status.SUCCESS, type.TYPE);
   
        var data = fs.readFileSync("register.html", 'utf-8');
        response.write(data);
        response.end();
    } 
    else if (requestedURL.pathname == '/viewInfo') {
    response.writeHead(status.SUCCESS, type.TYPE);
        var data = requestedURL.query;
        response.write("<br>Username : "+data.username);
        response.write("<br>Email : "+data.email);
        response.write("<br>Password : "+data.password);
        response.write("<br>Address : "+data.address);
        response.end();
    }
});
instance.listen(process.env.PORT, () => {
    console.log("Connection established successfully");
});








