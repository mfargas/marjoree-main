const express = require('express');
const app = express();

app.get('/html/about.html', function(req, res){
    res.redirect('/about');
});