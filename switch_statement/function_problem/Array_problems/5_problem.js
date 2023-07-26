const prompt = require("prompt-sync")();
const N = parseInt(prompt("Enter Total NO:"));

const Numbers = [];

for (let i = 0; i < N; i += 1) {
  const input = parseInt(prompt(`Enter Input NO ${i + 1}:`));
  Numbers.push(input);
}

function minimum(Array) {

  let mini = Array[0];

  for (let i = 1; i < Array.length; i+=1) {
    if (Array[i] < mini) {
      mini = Array[i]; 
    }
  }

  return mini;
}

const result = minimum(Numbers);

console.log("The minimum number is:", result);