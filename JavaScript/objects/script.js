let obj = {
  Name: "Sankar",
  age: 19,
  start: function () {
    console.log("Hello World!");
  },
};
obj.Name = "Sankar Karmakar";

obj.Marks = 474;

console.log(obj.Name);
console.log(obj["age"]);
obj.start();
console.log(obj.Marks);

delete obj.age;
console.log(obj);

console.log("Name" in obj);
console.log("Height" in obj);

for(let key in obj){
  console.log(key + " : " + obj[key]);
}