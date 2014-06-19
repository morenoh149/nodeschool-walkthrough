// problem 14 trampoline
// function repeat(operation, num){
//   if (num <= 0) return;
//   operation();
//   num -= 1;
//   // return repeat(operation, --num);
// }

// function trampoline(fn){

// }

// module.exports = function(operation, num) {
//   trampoline(operation);
//   return repeat(operation, num);
// };

//solution, no clue. some closure magic here
function repeat(operation, num) {
  if (num <= 0) return;
  return function() {
    operation();
    return repeat(operation, --num);
  };
}

function trampoline(fn) {
  while(fn && typeof fn === 'function'){
    fn = fn();
  }
}

module.exports = function(operation, num) {
  trampoline(function() {
    return repeat(operation, num);
  });
};
