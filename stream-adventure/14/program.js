// problem 14 secretz
var crypto = require('crypto');
var zlib = require('zlib');
var tar = require('tar');
var through = require('through');
// var fs = require('fs');

// function write(buf) { this.queue(console.dir('hey', buf.toString())); }
// var tr = through(write);

var cipherName = process.argv[2];
var cipherPass = process.argv[3];

// var stream = crypto.createDecipher(cipherName, cipherPass);
// // var md5Hasher = crypto.createHash('md5', { encoding: 'hex' });
// var zlibStream = zlib.createGunzip();
// var parser = tar.Parse();
// fs.createReadStream('encoded.tar').pipe(stream).pipe(tar.Parse())
// .on('entry', function(e) {
//   console.log(e);
//   console.log(crypto.createHash('md5').update(e.path).digest('hex'),
//               e.path);
// });

// // process.stdin.pipe(zlibStream) // unzip
// // .pipe(parser); // untar

var parser = tar.Parse();
parser.on('entry', function (e) {
  if (e.type !== 'File') return;

  var h = crypto.createHash('md5', { encoding: 'hex' });
  e.pipe(h).pipe(through(null, end)).pipe(process.stdout);

  function end () { this.queue(' ' + e.path + '\n') }
});

process.stdin
  .pipe(crypto.createDecipher(cipherName, cipherPass))
  .pipe(zlib.createGunzip())
  .pipe(parser);

// learned alot by attempt this. about hashing, how tar works and openssl. There was still a disconnect, didn't realize I had to decipher then gunzip the file. Thought that was one step. Understood tar.Parse() pretty well though
