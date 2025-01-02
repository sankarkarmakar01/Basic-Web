let arr = ["Math","English","Computer","Bio"]
console.log(arr);
// push
arr.push("Geography");
console.log(arr);
// unshift
arr.unshift("Bengali");
console.log(arr);

// pop
arr.pop()
console.log(arr);

//shift
arr.shift();
console.log(arr);

let newArr = [1,2,4,8,16];
//spice
newArr.splice(1,2);
console.log(newArr);

// empty
newArr = [];
console.log(newArr);

// indexof
let a = ["Sankar","Deep","Ujjal"]
let ans = a.indexOf("Deep");
console.log(ans);

// check array or not 
let result = Array.isArray(a);
console.log(result);