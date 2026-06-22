// Question 1: Reverse String
// Given a string, return the same string with its characters in reverse order.


function reverseString(str){
    return str.split('').reverse().join('');
}

console.log(reverseString("JOHN"))