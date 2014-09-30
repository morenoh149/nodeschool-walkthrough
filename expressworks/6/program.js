var express = require('express')
var app = express()
var path = require('path');
var stylus = require('stylus')
var crypto = require('crypto')

app.listen(process.argv[2])


app.put('/message/:id', function(req, res) {
  res.send(
    crypto.createHash('sha1')
    .update(new Date().toDateString() + req.params.id)
    .digest('hex')
  )
});
app.use(stylus.middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, '/public')));
