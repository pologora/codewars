function count(string) {
  string = string.split("");
  return string.reduce((acc, char) => {
    acc.hasOwnProperty(char) ? acc[char]++ : (acc[char] = 1);
    return acc;
  }, {});
}

console.log(count("aba"));
