const prompt =require("prompt-sync")();

const N =prompt("Enter Input NO:");

let sum =0

for(let i = 1; i <= N; i += 1){

      sum += i 
    
}
console.log('N =',N)
console.log('sum =',sum)