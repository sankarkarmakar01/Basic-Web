// let a = Math.random();
// console.log(a);
let b = Math.floor(Math.random() * 10);
// console.log(b);

function randomNumber(max, min) {
  let x = Math.floor(Math.random() * (max - min + 1) + min);
  return x;
}

console.log(randomNumber(25, 15));
