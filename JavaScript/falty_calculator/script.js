const prompt = require("prompt-sync")();

let a = prompt("Enter the first number:");
let b = prompt("Enter the second number:");
let c = prompt("Enter the operation:");
let random = Math.random();
let obj = {
  "+": "-",
  "-": "+",
  "*": "/",
  "/": "*",
};
console.log(random);
if (random > 0.1) {
  console.log(`The result is:${eval(`${a} ${c} ${b}`)}`);
} else {
  c = obj[c];
  console.log(`The result is:${eval(`${a} ${c} ${b}`)}`);
}
