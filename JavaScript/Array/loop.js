let arr = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < arr.length; i++) {
  console.log(`Element ${i} is ${arr[i]}`);
}

arr.forEach(function myfun(value) {
  console.log(value);
});
