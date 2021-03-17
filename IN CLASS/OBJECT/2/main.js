
// let n = 0;

// if (true) {
//   let n = 2;
//   console.log(n);
// }

// console.log(n);


// Так делать нельзя!!!
// Только для полифилов
if (typeof Array.prototype.add2 === "undefined") {
  Array.prototype.add2 = function () {
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i] + 2;
    }
  }
}

const array = [1,2,3];

array.add2();
console.log(array);




const createArray = (mapFunction = index => index) => length => 
  Array.from({ length }, (_, index) => mapFunction(index));


const add = function(n) {

  return function(n2) {
    return n + n2;
  }

}

console.log(add(2)(3));


const add2 = add(2);

console.log(add2(3));
console.log(add2(4));

const constructGreating = function() {

  let greeting = "Привет";

  let great = function (name) {
    console.log(greeting + ", " + name + "!");
  }

  // greeting = "Пока";
  let setWord = function(word) {
    greeting = word;
  }

  return {
    great,
    setWord
  };
}

const greeting = constructGreating();

greeting.great("Антон");

greeting.setWord("Пока");

greeting.great("Алибек");



// Страна - Город - Дом
// США Конституция - Штата Законов 