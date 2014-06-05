module.exports = function (dirname, extension, callback) {
  var fs = require('fs');
  var path = require('path');
  var result = [];
  fs.readdir(dirname, function (err, list) {
    if (err)
      return callback(err);
    else {
      for(var i = 0;i<list.length;i++){
        if (path.extname(list[i]) === '.' + extension) {
          result.push(list[i]);
        }
      }
      return callback(null, result);
    }
  });
};
