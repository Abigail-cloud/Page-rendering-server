const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;


let startPath = path.join(__dirname, "pages");

app.use(express.static(startPath));
//The main Page
app.get('/', function(req, res) {
    res.sendFile(path.join(startPath +'/index.html'));
    //__dirname : Will resolve to your project folder.
});


// <a href="about.html"></a>

app.get('/about', function(req, res) {
    res.sendFile(path.join(startPath +'/pages/about.html'));
});

app.get('/contact.html', function(req, res) {
    res.sendFile(path.join(startPath +'/pages/contact.html'));
});

//add the router
app.listen(port, () => {
    console.log('Running at port '+ port);
});

