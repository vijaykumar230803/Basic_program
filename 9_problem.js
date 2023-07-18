const prompt =require("prompt-sync")();

const N =prompt("Enter Input NO:");

let output =1

for(let i = 1 ; i <= N; i += 1){

    output *= i
}
console.log('Input:N =',N)
console.log('output:',output)