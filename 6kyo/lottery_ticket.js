// Time to win the lottery!

// Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

// Example ticket:

// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
// To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

// Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

// All inputs will be in the correct format. Strings on tickets are not always the same length.

function bingo(ticket, win) {
  const miniWinsQuantity = ticket.reduce((acc, miniTicket) => {
    const miniWin = checkMiniWin(miniTicket);
    console.log(miniWin);
    miniWin && acc++;
    return acc;
  }, 0);
  return miniWinsQuantity === win ? 'Winner!' : 'Looser!';
}

function checkMiniWin(subTicket) {
  const string = subTicket[0];
  const number = subTicket[1];
  for (let i = 0; i < string.length; i++) {
    console.log(
      'Char: ' +
        string[i] +
        ' code ' +
        string.charCodeAt(i) +
        ' number ' +
        number
    );
    if (string.charCodeAt(i) === number) return true;
  }
  return false;
}

// console.log(checkMiniWin(['BCA', 65]));
console.log(
  bingo(
    [
      ['NU', 85],
      ['RUDBKAM', 75],
      ['YNYP', 75],
      ['GFJTXFZZ', 74],
      ['PU', 74],
    ],
    1
  )
);
