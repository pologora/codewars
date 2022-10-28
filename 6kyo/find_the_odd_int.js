// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.
const arr = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];
const arr2 = [1, 2, 2];

function findOdd(A) {
  for (let i = 0; i < A.length; i++) {
    let countAppears = 0;
    A.forEach((el) => {
      if (el === A[i]) countAppears++;
    });
    if (countAppears % 2 == 1) return A[i];
  }
}

console.log(3^2);
//top
// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
