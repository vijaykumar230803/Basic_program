const prompt =require("prompt-sync")();

const weight =parseInt(prompt("Enter a weigth:"))

const heigth =parseInt(prompt("Enter a heigth"))

function bmi(weight,heigth){
   
    if(heigth > 3){
        heigth  =heigth / 100
    }

const bmi = weight / (heigth * heigth);

  return bmi;

}
const bmiresult =bmi(weight,heigth);

console.log(`bmi: ${bmiresult}`);
