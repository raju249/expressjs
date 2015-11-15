var express = require("express");
var fs = require("fs");
var port = process.argv[2];

var file = process.argv[3];

var app = express();

app.get('/books',function(req,resp){
    fs.readFile(file,function(err,data){
        if (err)
        {
            return err;
        }
        else
        {
            var obj = JSON.parse(data);
            resp.json(obj)
        }
    })
})
app.listen(port)