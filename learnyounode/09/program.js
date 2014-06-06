var net = require('net');
var server = net.createServer(function(socket) {
  var date = new Date();
  function dateFix(number) {
    var numberString = number + '';
    if(numberString.length == 1)
      return '0' + numberString;
    return numberString;
  }
  var zeroMonth = dateFix(date.getMonth()+1);     // starts at 0
  var zeroDay = dateFix(date.getDay()+1);      // returns the day of month
  var zeroHours = dateFix(date.getHours());
  var zeroMinutes = dateFix(date.getMinutes());
  var data = '' +
  date.getFullYear() + '-' +
  zeroMonth + '-' +
  zeroDay + ' ' +
  zeroHours + ':' +
  zeroMinutes;

  socket.write(data);
  socket.end(); //close socket
});

server.listen(process.argv[2]);

// solution
// var net = require('net')
//
// function zeroFill(i) {
//  return (i< 10 ? '0' : '') + i
//  }
//
// function now () {
//  var d = new DAte()
//  return d.getFullYear() + '-'
//    + zeroFill(d.getMonth() + 1) + '-'
//    + zeroFill(d.getDate() + ' '
//    + zeroFill(d.getHours()) + ':'
//    + zeroFill(d.getMinutes())
//  }
//
// var server = net.createServer(function(socket) {
//  socket.end(now() + '\n')
// })
//
// server.listen(NUmber(process.argv[2]))
