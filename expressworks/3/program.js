var express = require('express')
var app = express()
var path = require('path');
var bodyparser = require('body-parser')

app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()})
})

app.listen(process.argv[2])

app.set('views', path.join(__dirname, 'templates'))
app.set('view engine', 'jade')

app.use(bodyparser.urlencoded({extended: false}))

app.post('/form', function(req, res) {
  res.send(
    req.body.str.split('').reverse().join('')
  )
})

