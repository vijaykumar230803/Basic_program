const prompt = require("prompt-sync")();

const n1 = parseInt(prompt("Enter Input No:"));
const n2 = parseInt(prompt("Enter Input No:"));
const operator = prompt("Enter an Operator (+, *, -):");

function add(n1, n2) {
  return n1 + n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function difference(n1, n2) {
  if (n2 > n1) {
    return n2 - n1;
  }
  return n1 - n2;
}

function getoperation(operator) {
  if (operator =="+") {
    return add;
  } else if (operator =="*") {
    return multiply;
  }
  return difference;
}

const operationFunction = getoperation(operator)

const result = operationFunction(n1, n2);
console.log("Result:", result);