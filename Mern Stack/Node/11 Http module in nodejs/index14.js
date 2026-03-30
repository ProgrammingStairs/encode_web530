var http = require("http"); // type:"commonjs"
var { status, type } = require("./utility/utils.js");
var fs = require("fs");
var url = require('url');
var dotenv = require('dotenv');
dotenv.config();

var instance = http.createServer((request, response) => {
    //http://localhost:3000/home?a=100&b=200
    var requestedURL = url.parse(request.url).pathname;
    if (requestedURL == '/' || requestedURL == '/home') {
    response.writeHead(status.SUCCESS, type.TYPE);
   
        var data = fs.readFileSync("home.html", 'utf-8');
        response.write(data);
        response.end();
    }
    else if (requestedURL == '/about') {
    response.writeHead(status.SUCCESS, type.TYPE);
   
        var data = fs.readFileSync("about.html", 'utf-8');
        response.write(data);
        response.end();
    }
    else if (requestedURL == '/contact') {
    response.writeHead(status.SUCCESS, type.TYPE);
   
        var data = fs.readFileSync("contact.html", 'utf-8');
        response.write(data);
        response.end();
    }
    else if (requestedURL == '/services') {
    response.writeHead(status.SUCCESS, type.TYPE);
   
        var data = fs.readFileSync("services.html", 'utf-8');
        response.write(data);
        response.end();
    }
    else if (requestedURL.match('\.css$')) {
        response.writeHead(status.SUCCESS, { 'content-type': 'text/css' });
        var cssPath = "public/css/style1.css";
        var data = fs.createReadStream(cssPath);
        data.pipe(response);
    }
    else if (requestedURL.match('\.webp$')) {
        response.writeHead(status.SUCCESS, { 'content-type': 'image/webp' });
        var imagePath = "public/images/img4.webp";
        var data = fs.createReadStream(imagePath);
        data.pipe(response);
    }

});
instance.listen(process.env.PORT, () => {
    console.log("Connection established successfully");
});

