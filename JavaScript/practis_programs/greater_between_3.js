const prompt = require("prompt-sync")();

let a = prompt("Enter the first number:");
let b = prompt("Enter the second number:");
let c = prompt("Enter the thire number:");

if (a === b && a === c && b === c) {
  console.log("All numbers are equal");
} else if (a > b && a > c) {
  console.log("The largest number is " + a);
} else if (b > a && b > c) {
  console.log("The largest number is " + b);
} else {
  console.log("The largest number is " + c);
}
