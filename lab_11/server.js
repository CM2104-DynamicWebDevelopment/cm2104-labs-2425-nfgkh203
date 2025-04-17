const express = require('express');
const app = express();

//Route 1
app.get('/', function(req, res) {
  res.send("Hello world! by express");
});

//Route 2
app.get('/test', function(req, res){
    res.send("this is route 2");
    });

app.listen(8080);
