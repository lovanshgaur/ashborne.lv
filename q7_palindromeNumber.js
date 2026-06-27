// Question 7(9): Palindrome Number
// Given an integer x, return true if x is a palindrome, and false otherwise.

function palindromeNumber(n){
    let a = n.toString().split('').reverse().join('')
    console.log(a)
    return n.toString() === a
}
console.log(palindromeNumber(-121))
console.log(palindromeNumber(121))