var express = require('express')
var app = express()
var path = require('path');
var fs = require('fs');

app.listen(process.argv[2])
var filename = process.argv[3];

app.get('/books', function(req, res) {
  fs.readFile(filename, function(err, data) {
    res.json(JSON.parse(data));
  });
});
app.use(express.static(path.join(__dirname, '/public')));
