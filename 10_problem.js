const prompt = require("prompt-sync")();

const N = parseInt(prompt("Enter N: "));

let a = 0
let b = 1

for (let i = 1; i <= N; i+= 1) {
  console.log(a);

   const nextNumber = a + b;
   a = b;
   b = nextNumber;
}