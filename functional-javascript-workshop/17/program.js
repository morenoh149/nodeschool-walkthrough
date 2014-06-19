// problem 17 currying
// function curryN(fn, n) {
//   if (fn.length < arguments.length-1)
//     return curryN(fn)(n);
//   else {
//     return curryN(fn, n);
//   }
// }

// module.exports = curryN;

// solution, had to look. not sure what type of partial object to return
// didn't even realize n would be an arg to the creation indicating the
// number of expected args
function curryN(fn, n) {
  if (typeof n !== 'number') n = fn.length;

  function getCurriedFn(prev) {
    return function(arg) {
      var args = prev.concat(arg);
      if (args.length < n) return getCurriedFn(args);
      else return fn.apply(this, args);
    };
  }
  return getCurriedFn([]);
}

module.exports = curryN;

