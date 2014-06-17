// problem 11 implement map with reduce
module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function(prev, curr, i, arr){
    prev.push(fn(curr));
    return prev;
  }, []);
};

// solution easy
// module.exports = function map(arr, fn) {
//   return arr.reduce(function(acc, item, index, arr) {
//     return acc.concat(fn(item, index, arr))
//   }, [])
// }
