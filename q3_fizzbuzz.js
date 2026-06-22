// Question 3: FizzBuzz

// Print numbers from 1 to n; for multiples of 3 print "Fizz", for multiples of 5 print "Buzz", and for numbers divisible by both 3 and 5 print "FizzBuzz".

function fizzbuzz(n) {
    const result=[]
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
     result.push("FizzBuzz")
    } else if (i % 3 === 0) {
        result.push("Fizz")
    } else if (i % 5 === 0) {
        result.push("Buzz")
    } else {
        result.push(String(i))
    }
  }
  return result
}

console.log(fizzbuzz(16))