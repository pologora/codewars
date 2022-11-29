function minMax(arr) {
  return arr.reduce(
    (acc, num) => {
      acc[0] > num && (acc[0] = num);
      acc[1] < num && (acc[1] = num);
      return acc;
    },
    [arr[0], arr[0]]
  );
}

console.log(minMax([1, 2, 3, 4, 5, 6]));
