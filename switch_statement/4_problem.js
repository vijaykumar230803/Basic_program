const prompt = require("prompt-sync")();

const n1 = parseInt(prompt("Enter Input No:"));
const n2 = parseInt(prompt("Enter Input No:"));

function add(n1, n2) {
  return n1 + n2;
}

function multiplication(n1, n2) {
  return n1 * n2;
}

function difference(n1, n2) {
  if (n2 > n1) {
    return n2 - n1;
  }
  return n1 - n2;
}

function getoperation(operator) {
  if (operator == "+") {
    return add;
  } else if (operator == "*") {
    return multiplication;
  }
  return difference;
}
const ans =getoperation("*")(
    getoperation("+")(10,20),
    getoperation("-")(20,10)
)
console.log(ans)

