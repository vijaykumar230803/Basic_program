const prompt = require("prompt-sync")();

const N = prompt("Enter Input NO: ");

let output = ""

let array =[]

for (let i = 1; i <= N; i += 1) {

  if (i % 3== 0 && i % 5== 0) {
     output += "FizzBuzz "

  } else if (i % 3 == 0) {

     output += "Fizz "
  } else if (i % 5 == 0) {

     output += "Buzz "

  } else {
    output += i + " ";
  }
}

console.log(output)