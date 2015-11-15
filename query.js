var express = require("express");
var app = express();
var port = process.argv[2];

app.get('/search',function(req,resp){
    var query = req.query;
    resp.send(query)
})

app.listen(port)
