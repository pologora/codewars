const arr = [1, 1, 1, 2, 1, 1];

function findUniq(arr) {
  for (const num of arr) {
    if (arr.indexOf(num) === arr.lastIndexOf(num)) return num;
  }
}

console.log(findUniq(arr));
