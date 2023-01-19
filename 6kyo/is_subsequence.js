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

// function isSubsequence(s, t) {
//     // Initialize pointer j to keep track of current character in s
//     let j = 0;
//     // Iterate through characters in t
//     for (let i = 0; i < t.length && j < s.length; i++) {
//         // Check if current character in t matches current character in s
//         if (t[i] === s[j]) {
//             // If match found, increment pointer for s
//             j++;
//         }
//     }
//     // Return true if all characters in s have been found in t
//     return j === s.length;
// }


console.log(isSubsequence(s, t));
