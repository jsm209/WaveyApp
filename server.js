const http = require('http');
const express = require("express");

const fs = require('fs');
const { response } = require('express');

const app = express();

var path = require('path');
var filePath = "./public/index.html";
var resolvedPath = path.resolve(filePath);
console.log(resolvedPath);


app.get('/', function(req, res) {
    res.sendFile(resolvedPath);
})

/*
const server = http.createServer((req, res) => {

    // Serves different files based on url
    switch(req.url) {
        case "/index.html" :
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(htmlFile);
            break;
    }
});

  server.listen(process.env.PORT || 3000) // Specifies the port to whatever heroku gives us or 5000 on localhost.

*/