const prompt =require("prompt-sync")();

const N =prompt("Enter Input NO:");

for(let i = 1; i <= N ; i = i + 1){

    console.log(i, '*', i, '=',i * i )
}