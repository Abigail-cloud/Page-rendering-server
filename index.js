const express = require('express');
const app = express();
const path = require('path');

//The main Page
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : Will resolve to your project folder.
});

// <a href="about.html"></a>

app.get('/about.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/about.html'));
});

app.get('/contact.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/contact.html'));
});

//add the router
app.listen(process.env.port || 8080);

console.log('Running at Port 8080');