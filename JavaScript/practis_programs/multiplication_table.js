const prompt = require("prompt-sync")();
let ans;
let num = prompt("Enter a number: ");
for (let i = 1; i <= 10; i++) {
  ans = num * i;
  console.log(`${num} * ${i} : ${ans}`);
}
