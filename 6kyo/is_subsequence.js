const s = 'ab',
  t = 'baaba';

function isSubsequence(s, t) {
  let indexOfStartSearch = 0;
  let prevIndex = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    const indexOfChar = t.indexOf(char, indexOfStartSearch);

    if (indexOfChar < prevIndex) return false;
    prevIndex = indexOfChar;
    indexOfStartSearch = indexOfChar + 1;
  }
  return true;
}

console.log(isSubsequence(s, t));
