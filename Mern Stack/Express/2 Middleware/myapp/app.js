import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
var app = express();

app.get("/", (request, response, next) => {
    response.writeHead(200, { 'content-type': 'application/json' });
    response.write("This is an example of Error handling middleware");
    console.log("inside get method");
    const error = new Error("Error occured");
    next(error);
});

app.use((error, request, response, next) => {
    console.log("inside error handling middleware : ", error);
    response.end();
    // next();
});

app.listen(process.env.PORT, () => {
    console.log("Connection established successfully");
});