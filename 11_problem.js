const prompt = require("prompt-sync")();

const N = parseInt(prompt("Enter Input NO:"));

for (let i = 2; i < N; i+=1) {
 
    let Z = true

  for (let j = 2; j < i; j+=1) {
    if (i % j== 0) {
      Z = false
     
    }
  }
  if (Z) {
    console.log("output:",i)
  }
}