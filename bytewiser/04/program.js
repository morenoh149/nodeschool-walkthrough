// problem 04 buffer concat
// var through = require('through');
// var result = new Buffer(0);
// function write(buf) { this.queue(result = Buffer.concat([result, buf])); }
// function end() { this.queue(null); console.log(result); }
// var tr = through(write, end);
// process.stdin.pipe(tr);

//solution
// var buffers = [];

// process.stdin.on('readable', function(chunk) {
//   var chunk = process.stdin.read();
//   if (chunk !=== null) {
//     buffers.push(chunk);
//   }
// });

// process.stdin.on('end', function() {
//   console.log(Buffer.concat(buffers));
// });

var through = require('through');
var buffers = [];
function write(buf) { this.queue(buffers.push(buf)); }
function end() { this.queue(null); console.log(Buffer.concat(buffers)); }
var tr = through(write, end);
process.stdin.pipe(tr);

//solved it using through module on first try. refactored to use less
//buffer objects
