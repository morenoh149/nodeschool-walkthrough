// problem 09 html stream
var trumpet = require('trumpet');
var through = require('through');
var to_upper = function(buf) {
  this.queue(buf.toString().toUpperCase());
};
var tr = trumpet();
process.stdin.pipe(tr).pipe(process.stdout);

var stream = tr.select('.loud').createStream();
stream.pipe(through(to_upper)).pipe(stream);

//There's a bit of mind twisting here. Filter the input through tr.
//stream is defined in terms of tr. We read and write to stream which
//achieves in place replacement of .loud html
