function B() {
  console.log("B");

  if (!(this instanceof B)) {
    return new B();
  }

  this.b = "123";
}


const b = new B();
const b2 = B();

console.log(b);
console.log(b2);




// class A {
//   constructor(value) {
//     this.value = value;
//   }

//   printValue() {
//     console.log(this);
//     console.log(this.value);
//   }
// }


// const a = new A("012");
// a.printValue();

// console.log(a);

// // printValue();

// const a2 = {
//   value: "123"
// }


// a2.printValue = a.printValue.bind(a2);

// console.log(a2);

// a2.printValue();




// a.printValue();

// const b = {
//   value: "456"
// }

// printValue.call(b);