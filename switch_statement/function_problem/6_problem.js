const prompt = require("prompt-sync")();
const No = parseInt(prompt("Enter Input No: "));

function Table(No) {
  if (No !=No || No <= 0) {
    console.log("Invalid input");
    return;
  }

  for (let i = 1; i <= 10; i+=1) {
    console.log(`${No} x ${i} = ${No * i}`);
  }
}

Table(No);