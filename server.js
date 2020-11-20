const express = require("express");
const app = express();
const path = require('path');
const port = process.env.PORT || 3000; // Uses port set by environment (Heroku) or 3000 by default.

// Getting our resources
app.use(express.static('public'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/images', express.static(__dirname + '/public/images'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});


app.listen(port, () => console.log("Listening on port " + port + "!"));
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