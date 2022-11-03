/////////////////////////////String incrementer////////////////////////////////
// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(strng) {
  const chars = strng.replace(/\d+$/, '');
  const number = strng.replace(chars, '');

  if (number === '') return chars + 1;

  const newNumber = (Number(number) + 1)
    .toString()
    .padStart(number.length, '0');

  return chars + newNumber;
}

//some tops
// const incrementString = (s) => s.replace(/[0-8]?9*$/, (m) => String(++m));

// let incrementString = (str) =>
//   str.replace(/([0-8]|\d?9+)?$/, (e) => {
//     console.log(e);
//     return e ? +e + 1 : 1;
//   });

const strr = 'he55llo0002'.replace(/([0-8]|\d?9+)?$/, '');
console.log(strr);
