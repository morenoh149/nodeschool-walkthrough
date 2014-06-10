// problem 3 transform
var through = require('through');

function write(buf) { this.queue(buf.toString().toUpperCase()); }
var tr = through(write);

// function end() { console.log('__END__'); }

process.stdin.pipe(tr).pipe(process.stdout);
// tr.end();
