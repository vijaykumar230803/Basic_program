const prompt =require("prompt-sync")();

const N = prompt("Enter Input NO:");

for(let i =1; i <= 10 ; i = i + 1){
      
       console.log(i,'*',N,'=',i* N)
}
