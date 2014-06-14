// problem 01 hexadecimal encoding
var buffer = new Buffer(process.argv.splice(2,process.argv.length));
console.log(buffer.toString('hex'));

