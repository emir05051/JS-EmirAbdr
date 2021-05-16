
const array = [1, 2, 3, 4];
array[0] // value

let key = "value";
let func =  () => "something";

// POJO 
const obj = {
  key: "value",
  func: () => "something",
  child: {
    key2: "value2"
  },
  0: 1,
  "some-key": "some-value",
};

console.log(obj[key]); // value
console.log(obj.key); // value

console.log(obj.func()); // value
console.log(obj.child.key2); // value
console.log(obj["some-key"]); // value


obj.newKey = "newValue";

console.log(obj.newKey); // value

console.log(obj);

const arrayLike = {
  0: 1,
  1: 2,
  length: 2,
}

for (let i = 0; i < arrayLike.length; i++) {
  console.log(arrayLike[i]);
}

console.log(Array.from(arrayLike, e => e));


console.log(arrayLike);

console.log(console);
console.log(Math["floor"](20.2));


array.reverse();
array["reverse"]();

console.log(array);

/// 

console.log(typeof 1.2);
console.log(typeof NaN);
console.log(typeof Infinity);

console.log(typeof "");
console.log(typeof "dfasfdasdf");

console.log(typeof []);
console.log(typeof [1,2,3]);
console.log(typeof [1,2,"asdf", [1,2]]);
console.log(typeof {});
console.log(typeof { key: "value", key2: 2 });
console.log(typeof null);


console.log(typeof undefined);
console.log(typeof nonexistentVar);


console.log(typeof true);
console.log(typeof false);


console.log(typeof (() => 1));
console.log(typeof Math.floor);
console.log(typeof [].reduce);


console.log(typeof "12" === "");


const sum = (a, b) =>  {
  if (typeof a !== "number") {
    a = Number(a);
  }

  if (typeof b !== "number") {
    b = Number(b);
  }
  
  return a + b;
}

console.log(sum("2", 2));


const sumArray = numbers => {
  if (numbers instanceof Array) {
    return numbers.reduce((sum, number) => sum + number, 0);
  } else if (typeof numbers.length !== "undefined"){
    // Симитировать reduce с помощью цикла for
  }

  console.log("Ошибка");
}



console.log(
  sumArray(null)
);