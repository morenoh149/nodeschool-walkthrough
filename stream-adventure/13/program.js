// problem 13 crypt
var passphrase = process.argv[2];
var crypto = require('crypto');
var stream = crypto.createDecipher('aes256', passphrase);
process.stdin.pipe(stream).pipe(process.stdout);
