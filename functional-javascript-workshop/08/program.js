// problem 08 call
function duckCount() {
  return Array.prototype.reduce.call(arguments, function(previousValue, currentValue){
    if (Object.prototype.hasOwnProperty.call(currentValue, 'quack'))
      return ++previousValue;
    else
      return previousValue;
  }, 0);
}

module.exports = duckCount;

//solution medium. didn't know arguments couldn't run reduce, instead
//use Array.prototype.reduce.call()
// function duckCount() {
//   return Array.prototype.slice.call(arguments).filter(function(obj) {
//     return Object.prototype.hasOwnProperty.call(obj, 'quack')
//   }).length
// }
