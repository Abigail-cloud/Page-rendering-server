const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();


//The main Page
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : Will resolve to your project folder.
});


// <a href="about.html"></a>

router.get('/about.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/about.html'));
});

router.get('/contact.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/contact.html'));
});

//add the router
app.use('/', router);
app.listen(process.env.port || 8080);

console.log('Running at Port 8080');