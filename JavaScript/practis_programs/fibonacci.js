const prompt = require("prompt-sync")();
let a = 0;
let b = 1;
let c;
let n = prompt("Enter the number of terms: ");
console.log(a);
console.log(b);
for (let i = 1; i <= n - 2; i++) {
  c = a + b;
  console.log(c);
  a = b;
  b = c;
}
