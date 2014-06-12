// problem 11 duplexer redux
var duplex = require('duplexer');
var through = require('through');

module.exports = function(counter) {
  var counts = {};
  var input = through(write, end);
  return duplex(input, counter);

  function write(row) {
    counts[row.country] = (counts[row.country] || 0) + 1;
  }
  function end() { counter.setCounts(counts); }
};


// completely cheated on this one. Even when typing up the solution I
// realized I didn't fully understand that we would see the same country
// many times and that we needed to keep count of the number of times we
// saw them.
