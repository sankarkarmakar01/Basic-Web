const prompt = require("prompt-sync")();

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}

let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
num1 = parseInt(num1);
num2 = parseInt(num2);
console.log("Addition is:" + add(num1, num2));
