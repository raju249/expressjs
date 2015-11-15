var express = require("express");

var port = process.argv[2];

var app = express();
app.use(express.static(process.argv[3]));


app.listen(port)
