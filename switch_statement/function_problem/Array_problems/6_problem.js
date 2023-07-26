const prompt = require("prompt-sync")();
const N = parseInt(prompt("Enter Total No: "));

const Number = [];

for (let i = 0; i < N; i += 1) {
    const number = parseInt(prompt(`Enter Input No ${i + 1}: `));
    Number.push(number); 
}

function sortarray(Array) {
    Array.sort((a, b) => b - a);
    
}


Number.reverse(); 

console.log(Number);