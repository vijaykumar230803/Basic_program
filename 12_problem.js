const prompt = require("prompt-sync")();

const string = prompt("Enter Input NO:");

let count = 0;

for (let i = 0; i < string.length; i += 1) {
    const X = string[i]
    if (X=='a'|| X =='e'|| X=='i'|| X== 'o'|| X=='u') {
        count += 1
    }
}
console.log('Input String:',string)
console.log('output:',count);