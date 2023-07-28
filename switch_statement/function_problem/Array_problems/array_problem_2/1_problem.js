const prompt = require("prompt-sync")();

const arr1 = [];
const arr2 = [];

for (let i = 0; i < 4; i++) {
  const input1 = parseInt(prompt(`Enter ${i + 1} Array 1: `));
  arr1.push(input1);

  const input2 = parseInt(prompt(`Enter ${i + 1} Array 2: `));
  arr2.push(input2);
}

const combinedArray1 = arr1.concat(arr2);

console.log("Combined Array :", combinedArray1);

const combinedArray2 = [...arr1, ...arr2];

console.log("Combined Array :", combinedArray2);