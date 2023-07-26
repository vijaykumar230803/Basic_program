const prompt = require("prompt-sync")();

const N = parseInt(prompt("Total NO: "));

function sumOfArray(N) {
  let total = 0;
  for (let i = 0; i < N; i += 1) {
    const number = parseInt(prompt(`Enter Input No ${i + 1}: `));
    total =total+ number;
  }
  return total;
}

const result = sumOfArray(N);

console.log("Total =", result);