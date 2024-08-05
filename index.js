function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = word.toLowerCase().split("").reverse().join("")
  console.log("Reversed Word: ", reversedWord)
  
  return word.toLowerCase() === reversedWord ? true : false
}

/* 
  Add your pseudocode here
  define reversed word
  check whether the reversed word & word are equal
  return true or false otherwise
  Achieve that with a ternary operator -> Elegance
*/

/*
  Add written explanation of your solution here
  Defined a reversed word
  Compare 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
