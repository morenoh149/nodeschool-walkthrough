var mymodule = require('./mymodule.js');
var dir = process.argv[2];
var filter = process.argv[3];


mymodule(dir, filter, function(err, data) {
  if (err)
    console.log(err);
  else {
    data.forEach(function(element){
      console.log(element);
    }
  )};
});
