function getMiddle(s) {
  const stringLength = s.length;
  const middleChar = s[Math.floor(stringLength / 2)];
  const twoMiddleChars =
    s[Math.floor(stringLength / 2) - 1] + s[Math.floor(stringLength / 2)];
  return s.length % 2 ? middleChar : twoMiddleChars;
}

console.log(getMiddle('abcdem'));
