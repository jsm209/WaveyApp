// Getting modules
const express = require("express"); // Backend framework for building webapps and APIs.
const path = require('path'); // Used for handling and transforming file paths.
const bodyParser = require("body-parser"); // Necessary for handling HTTP POST requests (for incoming shopify webhooks specifically)

// Setup
const app = express(); 
const port = process.env.PORT || 3000; // Uses port set by environment (Heroku) or 3000 by default.

// Getting our resources
app.use(express.static('public'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/images', express.static(__dirname + '/public/images'));

// Shopify issues an HTTP POST request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

// Routes
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.post('/new-online-order', (req, res) => {
    // Let shopify know we recieved the order details
    res.send('OK');

    var data = req.body;
    console.log(data);
})


app.listen(port, () => console.log("Listening on port " + port + "!"));
