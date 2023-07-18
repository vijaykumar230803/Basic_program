const prompt =require("prompt-sync")();

const N = prompt("Enter Input NO:");

let sum =0;

for(let i = 2; i <= N; i += 2){

    sum += i
}
console.log('N =',N);
console.log('sum =',sum)