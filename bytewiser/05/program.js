// problem 05 typed arrays

process.stdin.on('data', function(chunk) {
  var typedArray = new Uint8Array(chunk);
  // typedArray.set(chunk);
  console.log(JSON.stringify(typedArray));
});

//solution
// process.stdin.once('data', function(buff) {
//   var ui8 = new UintArray(buff.length);
//   for (var i=0;i<buff.length;i++)
//     ui8[i] = buff[i]
//   console.log(JSON.stringify(ui8));
// });
