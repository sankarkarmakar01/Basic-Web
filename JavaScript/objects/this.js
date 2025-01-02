let person = {
  firstName: "Sankar",
  lastName: "Karmakar",
  sayHello() {
    console.log("Hello! I am " + this.firstName + " and I have a " + car.brand + " car");
  },
};

let car = {
  brand: "Tata",
  model: "Safari",
};

person.sayHello();
