var urls = process.argv.splice(2, 3);
var http = require('http');
var bl = require('bl');

http.get(urls[0], function(response) {
  response.setEncoding('utf8');
  response.pipe(bl(function (err, data) {
    if (err)
      console.log(err);
    console.log(data.toString());
    http.get(urls[1], function(response) {
      response.setEncoding('utf8');
      response.pipe(bl(function (err, data) {
        if (err)
          console.log(err);
        console.log(data.toString());
        http.get(urls[2], function(response) {
          response.setEncoding('utf8');
          response.pipe(bl(function (err, data) {
            if (err)
              console.log(err);
            console.log(data.toString());
          }));
        });
      }));
    });
  }));
});
