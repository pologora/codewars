// Letter triangles

// similar to Coloured triangles

// But this one sums indexes of letters in alphabet.

// Examples

// c o d e w a r s
// c is 3
// o is 15
// 15+3=18
// 18. letter in the alphabet is r
// then append r
// next is o d
// sum is 19
// append s
// do this until you iterate through whole string
// now, string is rsibxsk
// repeat whole cycle until you reach 1 character
// then return the char
// output is l
// codewars -> l
// triangle -> d
// C O D E W A R S
//  R S I B X S K
//   K B K Z Q D
//    M M K Q U
//     Z X B L
//      X Z N
//       X N
//        L

function triangle(row) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let word = row.split('');
  while (word.length > 1) {
    let nextArrayOfChars = [];
    for (let i = 0; i < word.length - 1; i++) {
      const firstCharIndx = alphabet.indexOf(word[i]) + 1;
      const secondCharIndx = alphabet.indexOf(word[i + 1]) + 1;
      const searchCharIndx =
        firstCharIndx + secondCharIndx > 26
          ? firstCharIndx + secondCharIndx - 26
          : firstCharIndx + secondCharIndx;
      nextArrayOfChars.push(alphabet[searchCharIndx - 1]);
    }
    word = nextArrayOfChars;
  }
  return word[0];
}

console.log(triangle('codewars'));
