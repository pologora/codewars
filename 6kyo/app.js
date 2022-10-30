const str = "abcd";

function accum(s) {
  let result = s[0].toUpperCase();
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (j === 0) result += `-${s[i].toUpperCase()}`;
      result += s[i].toLowerCase();
    }
  }
  return result;
}

console.log(accum(str));
