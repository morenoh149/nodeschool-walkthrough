// problem 11 http file server
var fs = require('fs');
var http = require('http');
var port = process.argv[2];
var filepath = process.argv[3];

var server = http.createServer(function(req, res) {
  fs.createReadStream(filepath).pipe(res);
});

server.listen(port);

//solution also contains
//res.writeHead(200, { 'content-type': 'text/plain' })
//before piping file
