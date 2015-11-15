var express = require("express");
var app = express();
var path = require("path")
app.set("views",process.argv[3])

app.set('view engine','jade')

app.get('/home',function(req,resp){
    resp.render('index',{date:new Date().toDateString()})
})

app.listen(process.argv[2])