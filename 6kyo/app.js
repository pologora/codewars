function oddOrEven(array) {
  const result = array.reduce((acc, num) => acc + num, 0);
  return result % 2 ? 'odd' : 'even';
}
console.log(oddOrEven([0, -1, -5]));
