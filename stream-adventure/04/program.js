// problem 4 lines
var split = require('split');
var through = require('through');
function write(buf) {
  buf = buf.toString();
  buf = flipit ? buf.toUpperCase() : buf.toLowerCase();
  buf += '\n';
  flipit = !flipit;
  this.queue(buf);
}
var tr = through(write);
flipit = false;
process.stdin
  .pipe(split())
  .pipe(tr)
  .pipe(process.stdout)
;

// solution
// var lineCount = 0;
// var tr = through(function(buf) {
//   var line = buf.toString();
//   this.queue(lineCount % 2 === 0
//              ? line.toLowerCase() + '\n'
//              : line.toUpperCase() + '\n'
//             );
//             lineCount ++;
// });
// process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);
