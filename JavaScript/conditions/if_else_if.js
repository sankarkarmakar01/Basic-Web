const prompt = require("prompt-sync")();

let a = prompt("Enter the first number:");
let b = prompt("Enter the second number:");
let c = prompt("Enter the third number:");

if (a > b && a > c) {
  console.log("The largest number is " + a);
} else if (b > a && b > c) {
  console.log("The largest number is " + b);
} else {
  console.log("The largest number is " + c);
}
