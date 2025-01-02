const prompt = require("prompt-sync")();

const prime = (n) => {
  n = parseInt(n, 10);
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
};

let n = prompt("Enter the number:");
let ans = prime(n);
if (ans === true) {
  console.log("Prime");
} else {
  console.log("Not Prime");
}
