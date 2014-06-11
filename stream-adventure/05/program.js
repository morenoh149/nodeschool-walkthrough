// problem 05 concat
var concat = require('concat-stream');
var reverse = concat(function(buf) {
  console.log(buf.toString().split('').reverse().join(''));
});

process.stdin.pipe(reverse);
