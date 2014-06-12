// problem 06 http server
var http = require('http');
var through = require('through');

function write(buf) { this.queue(buf.toString().toUpperCase()); }
// function end() { console.log(this); }

var server = http.createServer(function(req, res) {
  if(req.method === 'POST') {
    req.pipe(through(write)).pipe(res);
  } else {
    res.end('send me a POST\n');
  }
});
server.listen(parseInt(process.argv[2]));


//Note: don't reuse the same through object. must create a new one for
//each request.
