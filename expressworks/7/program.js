var express = require('express')
var app = express()
var path = require('path');
var stylus = require('stylus')
var crypto = require('crypto')

app.listen(process.argv[2])


app.get('/search', function(req, res) {
  res.send(req.query);
});
app.use(stylus.middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, '/public')));
