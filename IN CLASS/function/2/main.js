
const randomInt = (min, max) => 
  min + Math.floor(Math.random() * (max - min));


// console.log(randomInt(3, 20));


// let n = 9.5;
// console.log(Math.floor(n)); // Окркругление вниз = Округление к ближайшему снизу числу.
// console.log(Math.ceil(n));  // Округление вверх = к ближайшему сверху числу
// console.log(Math.trunc(n)); // Отбрасывает все после запятой
// console.log(Math.round(n)); // Математическое округление



let end = 15;
let start = 0;

let j = start; // Инициализации
while (j < end) { // Условие продожения цикла

  console.log(j); // Тело цикла

  j += 1; // Инкремент
}

console.log("Done");

for (let i = start; i < end; i += 2) {
  console.log(i);
}

for (let i = start; i < end; i += 1) {
  console.log(i);
}

console.log(i);
console.log("Done");


