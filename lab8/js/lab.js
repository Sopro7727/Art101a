// index.js - Checks if numbers within the array are prime, then applies a odd set of operations 
// Author: Noah Walker
// Date: May 5, 2024

// Constants
const chekPrime = [45,12,78,23,56,91,34,8,67,19];


// Functions
function isPrime(x){
  if(x <= 1){
      return false;
  }
  if(x <= 3){
      return true;
  }
  if(x % 2 == 0 || x % 3 == 0){
      return false;
  }
  let i = 5;
  while (i*i <= x){
      if(x % i == 0 || x % (i + 2) == 0){
          return false;
      }
      i += 6;
  }
  return true;
}

console.log("Is " + chekPrime[3] + "prime? Poll says: " + isPrime(chekPrime[3]));
console.log("Is " + chekPrime[8] + "prime? Poll says: " + isPrime(chekPrime[8]));

console.log("My list of numbers: " + chekPrime.join(", "));

let result = chekPrime.map(isPrime);
console.log("Test of primeness of array: " + result.join(", "));

let result1 = chekPrime.map(function(x){
  return (x * 3) - 9;
})

console.log("Odd operations on array: " + result1.join(", "));
let mapResults = result.join(", ");
$("#output").html("My list of numbers: " + chekPrime.join(", ") + "<br>Test of primeness of array: " + result.join(", ") + "<br>Odd operations on array: " + result1.join(", "));
// this is an example function and this comment tells what it doees and what parameters are passed to it.
  
function main() {
    console.log("Main function started.");
    // the code that makes everything happen
}
  
  // let's get this party started
  main();
  