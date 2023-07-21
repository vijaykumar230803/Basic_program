const prompt = require("prompt-sync")();

const N = parseInt(prompt("Enter Input NO:"));

if (N <= 1) {
  console.log(N, ' is not a prime number.');
} else {
  let Prime = true;

  for (let i = 2; i * i <= N; i+= 1) 
    if (N % i == 0) {
      Prime = false;
      break;
    }
  }

  if (Prime) {
    console.log(N, ' is a prime number.');
  } else {
    console.log(N, ' is not a prime number.');
  }
