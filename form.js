var express = require("express")
var bodyParser = require("body-parser")
var app = express()
var port = process.argv[2]

app.use(bodyParser.urlencoded({extended:false}));

app.post('/form',function(req,resp){
    var name = req.body.str.toString();
    name = name.split('').reverse().join('');
    resp.end(name);
})

app.listen(port)