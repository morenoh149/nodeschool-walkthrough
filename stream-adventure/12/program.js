// problem 12 combiner
var combine = require('stream-combiner');
var split = require('split');
var through = require('through');
var zlib = require('zlib');

// module.exports = function() {
//   var genreRow = {'name': undefined,'books': []};
//   var currentGenre = '';
//   function write(row) {
//     if(row.type === 'genre') {
//       currentGenre = row.name;
//       if(genreRow.name[ === undefined) {
//         genreRow.name = currentGenre;
//         genreRow.books
//       }
//     } else {
//       genreRow[currentGenre].push(row.name);
//     }
//   }
//   var tr = through(write);

//   return combine(
//     process.stdin,
//     split(),
//     tr,
//     zlib.createGzip(),
//     process.stdout
//   );
// };
//
// not familiar enough with JSON to do this one. my attempt above
module.exports = function() {
  var grouper = through(write, end);
  var current;

  function write (line) {
    if (line.length === 0) return;
    var row = JSON.parse(line);

    if (row.type === 'genre'){
      if (current) {
        this.queue(JSON.stringify(current) + '\n');
      }
      current = { name: row.name, books: [] };
    } else if (row.type === 'book') {
      current.books.push(row.name);
    }
  }
  function end() {
    if (current) {
      this.queue(JSON.stringify(current) + '\n');
    }
    this.queue(null);
  }

  return combine(split(), grouper, zlib.createGzip());
};
