const http = require('http');
const express = require("express");
const app = express();
const fs = require('fs');

// Getting our resources
app.use(express.static('public'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/images', express.static(__dirname + '/public/images'));

app.get('*', (req, res) => {
    res.sendFile('/public/index.html');
})

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    fs.createReadStream('index.html').pipe(res)
});

  server.listen(process.env.PORT || 3000) // Specifies the port to whatever heroku gives us or 5000 on localhost.

