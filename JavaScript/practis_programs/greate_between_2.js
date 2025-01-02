const prompt = require("prompt-sync")();

let a = prompt("Enter the first number:");
let b = prompt("Enter the second number:");

if (a === b) {
  console.log("Both are same");
} else if (a > b) {
  console.log("First number is greater");
} else {
  console.log("Second number is greater");
}
