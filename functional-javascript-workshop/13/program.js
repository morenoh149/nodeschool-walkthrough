// problem 13 blocking event loop
// var compute = true;
// function startTimer() {
//   setTimeout(function(){ compute = false; }, 1000);
// }

// function repeat(operation, num) {
//   if (num <= 0 || !compute) return;
//   operation();
//   startTimer();
//   return repeat(operation, --num);
// }

// module.exports = repeat;

// solution. was on a completely different track. I feel like the
// solution is a cop-out. I wanted to run the function continuously until
// one second in.

function repeat(operation, num) {
  if (num <= 0) return;

  operation();

  if (num % 10 === 0) {
    setTimeout(function() {
      repeat(operation, --num);
    });
  } else {
    repeat(operation, --num);
  }
}

module.exports = repeat;
