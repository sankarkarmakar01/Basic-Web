const prompt = require("prompt-sync")();

let num = prompt("Enter any integer:");
num = Number.parseInt(num);

if (num % 2 == 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}
