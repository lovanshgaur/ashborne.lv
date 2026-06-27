// Question 4: Find Duplicates
// Given an array of numbers, return all elements that appear more than once.

const num = [1, 2, 2, 3, 4, 5, 4, 6, 1];

function findDuplicate(num) {
  let j = [];
  let k = [];
  for (let i = 0; i < num.length; i++) {
    if (j.includes(num[i])) {
      k.push(num[i]);
    } else {
      j.push(num[i]);
    }
  }
  return k
}

console.log(findDuplicate(num));