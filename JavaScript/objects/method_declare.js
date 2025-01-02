let obj = {
  first: "Sankar",
  last: "Karmakar",
  third: function () {
    console.log("Hello");
  },
};
obj.third();

obj.sayHello = function () {
  console.log("Hello");
};
obj.sayHello();

function greet() {
  console.log("Hello");
}
obj.sayHello2 = greet;
obj.sayHello2();

//ES6

let Person = {
  firstName: "Sankar",
  lastName: "Karmakar",
  Hello() {
    console.log("Say Hello!");
  },
};
Person.Hello();
