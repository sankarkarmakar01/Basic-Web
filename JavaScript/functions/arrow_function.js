const prompt = require("prompt-sync")();

const fact = (num) => {
  let fac = 1;
  if (num === 0 || num === 1) {
    return 1;
  } else {
    num = parseInt(num);
    for (let i = 1; i <= num; i++) {
      fac = fac * i;
    }
  }
  return fac;
};

let number = prompt("Enter the number:");
let ans = fact(number);
console.log(`The factorial of ${number} is ${ans}`);
