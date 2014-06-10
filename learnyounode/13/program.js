// problem 13 http json api server
var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });

  var urlParsed = url.parse(req.url, true);
  if (urlParsed.pathname === '/api/parsetime') {
    var iso = urlParsed.query.iso;
    var queryDate = new Date(iso);
    res.write(JSON.stringify({ 'hour': queryDate.getHours(),
                'minute': queryDate.getMinutes(),
                'second': queryDate.getSeconds() }));
    res.end();
  } else if (urlParsed.pathname === '/api/unixtime') {
    // var now = new Date();
    // res.write(JSON.stringify({ 'unixtime': now.getTime() }));
    var iso = urlParsed.query.iso;
    var queryDate = new Date(iso);
    res.write(JSON.stringify({ 'unixtime': queryDate.getTime() }));
    res.end();
  }
});

server.listen(process.argv[2]);

// solution

//     var http = require('http')
//     var url = require('url')

//     function parsetime (time) {
//       return {
//         hour: time.getHours(),
//         minute: time.getMinutes(),
//         second: time.getSeconds()
//       }
//     }

//     function unixtime (time) {
//       return { unixtime : time.getTime() }
//     }

//     var server = http.createServer(function (req, res) {
//       var parsedUrl = url.parse(req.url, true)
//       var time = new Date(parsedUrl.query.iso)
//       var result

//       if (/^\/api\/parsetime/.test(req.url))
//         result = parsetime(time)
//       else if (/^\/api\/unixtime/.test(req.url))
//         result = unixtime(time)

//       if (result) {
//         res.writeHead(200, { 'Content-Type': 'application/json' })
//         res.end(JSON.stringify(result))
//       } else {
//         res.writeHead(404)
//         res.end()
//       }
//     })
//     server.listen(Number(process.argv[2]))
