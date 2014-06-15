// problem 02 modifying buffers
process.stdin.on('data', function(chunk){
    for(var i=0;i<chunk.length;i++){
      if(chunk[i] === 0x2e) {
        chunk.write('!', i);
        // chunk[i] = 0x21;
      }
    }
    // buf.pipe(process.stdout);
    console.log(chunk);
    // console.error('data: '+ buf.toString());
  }
);
// in my solution I make a new buffer that is utf8 encoded (default), by reading from process.stdin,
// so any comparisons/manipulations can be done against strings. The standard
// solution actually keeps the original buffer

// process.stdin.on('data', function (buff) {
//   var buff = process.stdin.read();
//   var mybuf = new Buffer(buff);
//   for (var i=0;i<mybuf.length;i++){
//     if(mybuf[i] === 46){
//       mybuf.write('!', i);
//     }
//   }
//   console.log(mybuf);
// }
