// Write a function that takes in a
// string of one or more words, and returns the same string, but with
//  all five or more letter words reversed (Just like the name of this Kata). Strings passed in will
//  consist of only letters and spaces. Spaces will be included only when more than one word is present.

function spinWords(string) {
  //split the string into an array of words
  const words = string.split(' ');

  //map over an array and reverse word with 5 or more letters, join array into the string and return it
  return words
    .map((word) => {
      return word.length >= 5 ? reverseWord(word) : word;
    })
    .join(' ');
}

function reverseWord(word) {
  return word.split('').reverse().join('');
}

console.log(spinWords('hii Mikola'));
//1.Revesre word in words>=5 letters
//2.Plan:
//a)przerobiamy string to array of words
//a).1 iterujemy i zmieniamy
// osobna funcja do reverse pojedynczy word
//b)reverse all >= 5 letters
//c)add to string + spaces
