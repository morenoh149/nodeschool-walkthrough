var express = require('express')
var app = express()
var path = require('path');
app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()})
})
app.listen(process.argv[2])

app.set('views', path.join(__dirname, 'templates'))
app.set('view engine', 'jade')
