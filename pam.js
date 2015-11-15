var express = require("express");
var crp = require("crypto");

var app = express();

var port = process.argv[2];

app.put('/message/:id',function(req,resp){
    var data = crp.createHash('sha1')
                .update(new Date().toDateString() + req.params.id)
                .digest('hex');
    resp.end(data);
    
})

app.listen(port)