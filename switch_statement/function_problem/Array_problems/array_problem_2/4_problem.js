const prompt = require("prompt-sync")();

const arr = [];
const numElements = parseInt(prompt("Enter the number of elements in the array: "));

for (let i = 0; i < numElements; i += 1) {

  const input = parseInt(prompt(`Enter element ${i + 1}: `));

  arr.push(input);
}

console.log("Array:", arr);

const odd = [];
const even = [];

for (let i = 0; i < arr.length; i += 1) {
  if (arr[i] % 2 == 0) {

    even.push(arr[i]);
  } else {
    
    odd.push(arr[i]);
  }
}

console.log("odd =", odd.length);
console.log("even =", even.length);