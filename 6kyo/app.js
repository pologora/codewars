const s = 'ab',
  t = 'baab';

function isSubsequence(s, t) {
  let result = '';
  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    if (s.includes(char)) {
      result += char;
    }
  }
  console.log(result);
  return s === result;
}

console.log(isSubsequence(s, t));
