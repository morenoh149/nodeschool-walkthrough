var express = require('express')
var app = express()
var path = require('path');
var stylus = require('stylus')

app.listen(process.argv[2])

app.use(stylus.middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, '/public')));

