//A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

const isPangram = (str) => {
  let lowerStr = str.toLowerCase();
  let alpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "x",
    "y",
    "z",
  ];
  for (let i = 0; i < lowerStr.length; i++) {
    for (let j = 0; j < alpha.length; j++) {
      if (lowerStr[i] === alpha[j]) {
        (`Splicing: ${alpha[j]}`);
        alpha.splice([j], 1);
        (`Alph: ${alpha}`);
      }
    }
  }
  

  if (alpha.length === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// console.log(isPangram("The sun rises every morning unless its raining"));

// Time Complexity O(n^2)
// Space Complexity O(1)