function isPalindrome(word) {
  // Write your algorithm here
  const splitted = word.split("");
  const copySplitted = [...splitted]
  const reversed = copySplitted.reverse("");

  for(let i = 0; i < splitted.length; i++){
    if(reversed[i] !== splitted[i]){
      return false;
    }
    else{
      return true;
    }
  }
}

/* 
  Add your pseudocode here
  split the given word for creating an array
  make a copy from this array
  reverse the copied array
  now you have 2 arrays, create a "for loop" to check the letters 
    add a if-else statement in the loop
    it checks the letter in the arrays with index
    if letters are not same return false
    else return true

*/

/*
  Add written explanation of your solution here
  we have one string and want to check if its reverse is same or not. firstly I take the word and push to an array
  its letters. Then I create a copy of the array for that I can reverse it. I reverse the copied array and create
  a for loop. I will find if the word is palindrom or not so I add a if-else condition to check each letters.
  When letters in the arrays are checking one by one, I try to find different letter. If there is a different letter
  in the same index of arrays, I return "false", if there is not differences I return "true".
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;