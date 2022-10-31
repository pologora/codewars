const str = 'hello h';
String.prototype.replaceIndexOn = function (index, replacement) {
  return this.substring(0, index) + replacement + this.substring(index + 1);
};

function wave(str) {
  const array = str.split('');
  const result = [];
  array.forEach((char, i) => {
    if (char !== ' ') {
      result.push(str.replaceIndexOn(i, char.toUpperCase()));
    }
  });
  return result;
}

console.log(-6%2);
