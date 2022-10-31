// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed
// characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.
function concat(text) {
  text = text.split("");
  let odd = "";
  let even = "";
  text.forEach((element, i) => {
    i % 2 === 0 ? (even += element) : (odd += element);
  });
  return odd + even;
}

function deConcat(text) {
  text = text.split("");
  const middleElement = Math.floor(text.length / 2);
  let odd = text.slice(0, middleElement);
  let even = text.slice(middleElement);

  const result = text
    .map((_, i) => {
      return i % 2 ? [...odd.splice(0, 1)] : [...even.splice(0, 1)];
    })
    .join("");

  return result;
}

function encrypt(text, n) {
  if (!text || n < 0) return text;
  for (let index = 0; index < n; index++) {
    text = concat(text);
  }
  return text;
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n < 0) return encryptedText;
  for (let i = 0; i < n; i++) {
    encryptedText = deConcat(encryptedText);
  }
  return encryptedText;
}

console.log(decrypt("20314", 3));

//top
function encrypt(text, n) {
  if (!text || n <= 0) return text;
  while (n--) {
    let ans = "";
    for (let i = 1; i < text.length; i += 2) {
      ans += text[i];
    }
    for (let i = 0; i < text.length; i += 2) {
      ans += text[i];
    }
    text = ans;
  }
  return text;
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText;
  const ans = new Array(encryptedText.length);
  while (n--) {
    let j = 0;
    for (let i = 1; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    for (let i = 0; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    encryptedText = ans.join("");
  }
  return encryptedText;
}
