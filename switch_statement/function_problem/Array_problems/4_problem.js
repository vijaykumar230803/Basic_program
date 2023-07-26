const prompt = require("prompt-sync")();
const N = parseInt(prompt("Enter Total NO:"));

const Numbers = [];

for (let i = 0; i < N; i += 1) {
  const input = parseInt(prompt(`Enter Input NO ${i + 1}:`));
  Numbers.push(input);
}

function maximum(Array) {

  let max = Array[0];

  for (let i = 1; i < Array.length; i+=1) {
    if (Array[i] > max) {
      max = Array[i]; 
    }
  }

  return max;
}

const result = maximum(Numbers);

console.log("The maximum number is:", result);