const prompt = require("prompt-sync")();

const Tamil = parseInt(prompt("Enter Tamil Mark:"));
const English = parseInt(prompt("Enter English Mark:"));
const Maths = parseInt(prompt("Enter Maths Mark:"));
const Science = parseInt(prompt("Enter Science Mark:"));
const Social = parseInt(prompt("Enter Social Mark:"));

function TotalMark(Tamil, English, Maths, Science, Social) {
  return Tamil + English + Maths + Science + Social;
}

const totalMarks = TotalMark(Tamil, English, Maths, Science, Social);

const totalSubjects = 5;

function percentage(TotalMark, TotalSubjects) {
  return (TotalMark / (TotalSubjects * 100)) * 100;
}

const percentageResult = percentage(totalMarks, totalSubjects);

console.log("Total Mark: " + totalMarks);

console.log("Percentage: " + percentageResult + "%");