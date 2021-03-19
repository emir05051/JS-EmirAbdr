let forms = ["яблок", "яблока", "яблоко"];

const createArray = (mapFunction = index => index) => length =>
    Array.from({ length }, (_, index) => mapFunction(index));

const randomInt = (min, max) =>
    min + Math.floor(Math.random() * (max - min));

const createRandomArray = (min, max) =>
    createArray(() => randomInt(min, max));

let apples = createRandomArray(-5, 20)(10);

const filterNegative = array => array.filter(n => n < 0);
const filterPositive = array => array.filter(n => n >= 0);


// const appleWord = word => {

//     let letter = Math.abs(word);
//     let last = letter % 10;
//     let second = Math.trunc(letter / 10) % 10;
//     if (second === 1) {
//         return forms[0];
//     } else if (last === 1 && letter !== 11) {
//         return forms[2];
//     } else if ((last === 0 || last === 9 || last === 8 || last === 7 || last === 6 || last === 5) || (letter >= 5 && letter <= 19) || second == 1) {
//         return forms[0];
//     } else {
//         return forms[1];
//     }

// }

const sum = array => array.reduce((sum, number) => sum + number, 0);
const average = array => sum(array) / array.length;

const areAllPositive = array =>
    array.every(n => n >= 0);

const map = array => array.map(n => n > 0 ? "Дохож " : "Расход ")

console.log(apples);


if (areAllPositive(apples)) {
    console.log("Повезло, все положительно");
}

console.log("Сумма отрицательных " + sum(filterNegative(apples)));
console.log("Сумма положительных " + sum(filterPositive(apples)));

console.log("Сренее отрицательных " + average(filterNegative(apples)));
console.log("СреДнее отрицательных " + average(filterPositive(apples)));

console.log("Отрицательные " + filterNegative(apples));
console.log("Положительные " + filterPositive(apples));

console.log(map(apples));


console.log(apples.sort(function(a, b) {
    return a - b;
}));