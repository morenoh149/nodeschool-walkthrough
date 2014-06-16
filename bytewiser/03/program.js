// problem 03 line splitter
var filepath = process.argv[2];
var fs = require('fs');
// var through = require('through');
// var result = [];
// function write(buf) { this.queue(buf.toString().split('\n').push(result)); }
// function end() { console.log(result); }
// var tr = through(write);

// fs.createReadStream(filepath).pipe(tr);
//
// fs.readFile(filepath, function(err,data){
//   if (err) throw err;
//   var lines = data.split('\n');
//   for(var i=0;i<lines.length;i++){
//     console.log(new Buffer(lines[i]));
//   }
// });
fs.readFile(filepath, function(err, data){
  if (err) throw err;
  // console.log(data.length);
  var begining = 0;
  for(var i=0;i<data.length;i++){
    if(data[i] === 10){
      console.log(data.slice(begining,i-1));
      begining = i+1;
    }
  }
  console.log(data.slice(begining,i-1));
});

// tried to solve this using streams at first. Should attempt to solve it
// that way someday.
