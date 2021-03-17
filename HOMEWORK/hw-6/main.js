let apples = 0;
let forms = ["яблок", "яблока", "яблоко"];

const randomInt = (min, max) =>
    min + Math.floor(Math.random() * (max - min));


const sum = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; ++i) {
        sum += Math.abs(arr[i]);
    }
    return sum;
}
const average = arr => {
    let len = arr.length;
    return sum(arr) / len;
}
const Negative = array => array.filter(n => n < 0);
const Positive = array => array.filter(n => n >= 0);


const appleWord = word => {

    let letter = Math.abs(word);
    let last = letter % 10;
    let second = Math.trunc(letter / 10) % 10;
    if (second === 1) {
        return forms[0];
    } else if (last === 1 && letter !== 11) {
        return forms[2];
    } else if ((last === 0 || last === 9 || last === 8 || last === 7 || last === 6 || last === 5) || (letter >= 5 && letter <= 19) || second == 1) {
        return forms[0];
    } else {
        return forms[1];
    }

}

const appleQuantity = number => {
    if (number > 0) {
        console.log("--------")
        console.log("Полная")
        console.log("У вас " + number + " " + appleWord(number));
    }
    if (number === 0) {
        console.log("--------")
        console.log("Пустая")
        console.log("У вас " + number + " " + appleWord(number));
    }
    if (number < 0) {
        console.log("--------")
        console.log("У вас кредит")
        console.log("У вас " + number + " " + appleWord(number));
    }
}


// 1 яблоко form1 2 яблока form2 3 яблока form2 4 яблока form2 
// 5 яблок form3 6 яблок form3 7 яблок form3 8 яблок form3 9 яблок form3 
// 10 яблок form3 xxxx11 - 19 яблок form3 xxxx20 яблок xxxx21 яблоко 
// xxxx22 яблока xxxx23 яблока xxxx24 яблока xxxx25 яблок xxxx26 яблок 
// xxxx27 яблок xxxx28 яблок xxxx29 яблок xxxx30 яблок

appleQuantity(apples);
apples += 211;
appleQuantity(apples);
apples -= 66;
appleQuantity(apples);
apples += 359;
appleQuantity(apples);


console.log("NERWRNQUWQBNRIQHBRQWRIHRIQWRHIQURHIUQHRIUQWYRHWYIUQRHBIUYWQ");

let goal = 100;
let current = 0;

const Quantity = (now) => {

    if (now > 0) {
        console.log("Вы получили " + Math.abs(now) + " " + appleWord(now));
    } else if (now < 0) {
        console.log("Вы потеряли " + Math.abs(now) + " " + appleWord(now));
    } else {
        console.log("К сожалению, сегодня без яблок");
    }
}

let randomArray = [];

while (current <= goal) {
    let apple = randomInt(-5, 10);
    randomArray.push(apple);
    current = current + apple;
    Quantity(apple);
    appleQuantity(current);
}

console.log("Вы достигли своей цели");


console.log("Сумма все отрицательных " + sum(Negative(randomArray)));
console.log("Сумма все положительных " + sum(Positive(randomArray)));


console.log("Сренее всех отрицательных " + average(Negative(randomArray)));
console.log("Сренее всех положительных " + average(Positive(randomArray)));


console.log("fewfwefew");