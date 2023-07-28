const prompt = require("prompt-sync")();

const arr = [];

const numElements = parseInt(prompt("Enter the number of elements in the array: "));

for (let i = 0; i < numElements; i+=1) {
  const input = parseInt(prompt(`Enter element ${i + 1}: `));
  arr.push(input);
}

console.log("Array:", arr);

const element = parseInt(prompt("Enter the element to find: "));

const index = arr.indexOf(element);

console.log("Index of the element:", index);