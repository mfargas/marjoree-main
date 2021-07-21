const express = require('express');
const app = express();
var port = process.env.PORT || 8080;

app.get('/', function(req, res) {res.send('Welcome')});

app.listen(port, function () {
    console.log("Running on Port " + port);
})

let apiRoutes = require("./router");

app.use('/api', apiRoutes)

let mongoose = require('mongoose');
const router = require('router');
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

// var about = '/html/about.html';



// router.get('/', function (req, res) {
//     console.log('hello')
// });

// router.get('/html/about.html', function(req, res){
//     // var slug = req.param("slug");
//     res.send('about')
// });