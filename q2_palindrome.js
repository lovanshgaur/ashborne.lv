// Question 2: Palindrome
// Given a string, determine whether it reads the same forward and backward, and return true or false.

function palindromeChecker(str) {
  const str2 = str.split("").reverse().join("");
  return str === str2 
}

console.log(palindromeChecker('brrb'))
console.log(palindromeChecker('brrba'))