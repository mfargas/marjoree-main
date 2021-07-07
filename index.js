const express = require('express');

var app = express();

app.get('./html/about.html', function(req, res){
    res.redirect('https://www.marjoree.com/about');
});