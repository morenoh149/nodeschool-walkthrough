// problem 09 partial application without bind
var slice = Array.prototype.slice;

function logger(namespace) {
  return function() {
    console.log.apply(null, [namespace].concat(slice.call(arguments)));
  };
}

module.exports = logger;


//solution. didn't solve this.
//don't even grok the slice usage. It's being used to create an array
//that can be concated?
