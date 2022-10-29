// The goal of this exercise is to convert a string to a new string where each
// character in the new string is "(" if that character appears only once in the
//  original string, or ")" if that character appears more than once in the original string.
//  Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function duplicateEncode(word) {
  let result = "";
  for (let i = 0; i < word.length; i++) {
    let timesInWord = 0;
    for (let j = 0; j < word.length; j++) {
      if (word[i].toLowerCase() === word[j].toLowerCase()) timesInWord++;
    }
    if (timesInWord > 1) result += ")";
    else result += "(";
  }
  return result;
}

//top
function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}

function duplicateEncode(word) {
  word = word.toLowerCase();
  return word.replace(/./g, (m) =>
    word.indexOf(m) == word.lastIndexOf(m) ? "(" : ")"
  );
}
