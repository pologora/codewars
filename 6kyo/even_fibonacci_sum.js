// DESCRIPTION:
// Give the summation of all even numbers in a Fibonacci sequence up to, but not including, the number passed to your function. Or, in other words, sum all the even Fibonacci numbers that are lower than the given number n (n is not the nth element of Fibonnacci sequence) without including n.

// The Fibonacci sequence is a series of numbers where the next value is the addition of the previous two values. The series starts with 0 and 1:

// 0 1 1 2 3 5 8 13 21...

// For example:

// fibonacci(0)==0
// fibonacci(33)==10
// fibonacci(25997544)==19544084

function fibonacci(max) {
  let fn = 0;
  let nextN = 1;
  const fibArray = [0, 1];
  let fibNum = 0;
  while (fibNum < max) {
    fibArray.push(fibNum);
    fibNum = fn + nextN;
    fn = nextN;
    nextN = fibNum;
  }
  return fibArray
    .filter((num) => num % 2 === 0)
    .reduce((acc, num) => acc + num);
}

console.log(fibonacci(33));

//top
function fibonacci(max) {
  if (max < 2) return 0;
  let [a, b] = [1, 0],
    sum = 0;
  while (b < max) {
    [a, b] = [b, a + b];
    if (b % 2 === 0 && b < max) sum += b;
  }
  return sum;
}
