const prompt = require("prompt-sync")();

let num = prompt("Enter the first number:");
num = Number.parseInt(num);
if (num === 0) {
  console.log("It is Zero");
} else if (num > 0) {
  console.log("It is Positive");
} else {
  console.log("It is Negative");
}
