// Question 6(125): Valid Palindrome
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

//Given a string s, return true if it is a palindrome, or false otherwise.

function validPalindrome(s) {
  let a = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let b = a.split("").reverse().join("");
  return a === b;
}

let p = "A man, a plan, a canal: Panama";
console.log(validPalindrome(p));
