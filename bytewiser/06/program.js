// problem 06 array buffers
var buffer = new ArrayBuffer(4);
var Uint32View = new Uint32Array(buffer);
Uint32View[0] = process.argv[2];
// console.log(process.argv.toString());
var Uint16View = new Uint16Array(buffer);
console.log(JSON.stringify(Uint16View));

// solution
// var num = +process.argv[2];
// var ui32 = new Uint32Array(1);
// ui32 = num;
// var ui16 = new Uint16Array(ui32.buffer);
// console.log(JSON.stringify(ui16));
