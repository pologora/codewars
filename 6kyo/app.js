var isSquare = function (arr) {
  return arr.length > 0
    ? arr.every((el) => Number.isInteger(Math.sqrt(el)))
    : undefined;
};

console.log(Number.isInteger([]));
