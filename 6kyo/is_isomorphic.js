function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      for (let value of map.values()) {
        if (value === t[i]) return false;
      }
      map.set(s[i], t[i]);
    } else if (map.get(s[i]) !== t[i]) {
      return false;
    }
  }
  return true;
}

// function isIsomorphic(s, t) {
//     if (changeStringToNumbers(s) === changeStringToNumbers(t)) return true;
//     return false;
//   }
const s = 'paper',
  t = 'title';

// function changeStringToNumbers(string) {
//   let result = '';
//   for (let i = 0; i < string.length; i++) {
//     const char = string[i];
//     if (string.indexOf(char) === string.lastIndexOf(char)) {
//       result += '0';
//     } else result += '1';
//   }
//   return result;
// }

//   function changeStringToNumbers(string) {
//     let result = '';
//     const charCounts = {};
//     for (let i = 0; i < string.length; i++) {
//       const char = string[i];
//       charCounts[char] = charCounts[char] + 1 || 1;
//       console.log(charCounts);
//     }
//     for (let i = 0; i < string.length; i++) {
//       const char = string[i];
//       result += charCounts[char] === 1 ? '0' : '1';
//     }
//     return result;
//   }

console.log(isIsomorphic(s, t));
// console.log(changeStringToNumbers('paper'));
