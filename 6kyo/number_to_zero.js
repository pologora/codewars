// Given an integer num, return the number of steps to reduce it to zero.

// In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

function numberOfSteps(num) {
  let steps = 0;
  for (let i = num; i > 0; ) {
    i = i % 2 ? i - 1 : i / 2;
    steps++;
  }
  return steps;
}

console.log(numberOfSteps(123));
