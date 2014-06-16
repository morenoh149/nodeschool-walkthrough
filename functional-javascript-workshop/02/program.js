// problem 02 higher order functions
function repeat(operation, num) {
  if(num === 0)
    return;
  operation();
  repeat(operation,num-1);
}

module.exports = repeat;

//solution
// function repeat(operation, num) {
//   if (num <= 0) return
//   operation()
//   return repeat(operation, --num)
// }
