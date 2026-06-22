// Question 5: Frequency Counter

// Given an array of numbers, return an object where each number is a key and its value is the number of times that number appears in the array.

const num = [1, 2, 1, 3, 2, 4, 1, 5, 3, 2, 2];

function frequencyCounter(num) {
  let k = {};

  for (let i = 0; i < num.length; i++) {
    let key = String(num[i]);
    console.log(key);
    if (key in k) {
      k[key] = k[key] + 1;
    } else {
      k[key] = 1;
    }
  }
  return k;
}

console.log(frequencyCounter(num));
