let apples = 0;
let forms = ["яблок", "яблока", "яблоко"];

const randomInt = (min, max) =>
    min + Math.floor(Math.random() * (max - min));

const AppleWord = word => {

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

const AppleQuantity = number => {
    if (number > 0) {
        console.log("--------")
        console.log("Полная")
        console.log("У вас " + number + " " + AppleWord(number));
    }
    if (number === 0) {
        console.log("--------")
        console.log("Пустая")
        console.log("У вас " + number + " " + AppleWord(number));
    }
    if (number < 0) {
        console.log("--------")
        console.log("У вас кредит")
        console.log("У вас " + number + " " + AppleWord(number));
    }
}


// 1 яблоко form1 2 яблока form2 3 яблока form2 4 яблока form2 
// 5 яблок form3 6 яблок form3 7 яблок form3 8 яблок form3 9 яблок form3 
// 10 яблок form3 xxxx11 - 19 яблок form3 xxxx20 яблок xxxx21 яблоко 
// xxxx22 яблока xxxx23 яблока xxxx24 яблока xxxx25 яблок xxxx26 яблок 
// xxxx27 яблок xxxx28 яблок xxxx29 яблок xxxx30 яблок

AppleQuantity(apples);
apples += 211;
AppleQuantity(apples);
apples -= 66;
AppleQuantity(apples);
apples += 359;
AppleQuantity(apples);


console.log("NERWRNQUWQBNRIQHBRQWRIHRIQWRHIQURHIUQHRIUQWYRHWYIUQRHBIUYWQ");

let goal = 100;
let current = 0;

const Quantity = (now, after) => {
    after = Math.abs(after);
    if (now > 0) {
        console.log("Вы получили " + after + " " + AppleWord(after));
    } else if (now < 0) {
        console.log("Вы потеряли " + after + " " + AppleWord(after));
    } else {
        console.log("К сожалению, сегодня без яблок");
    }
}

while (current <= goal) {
    let apple = randomInt(-5, 10);
    current = current + apple;
    Quantity(apple, current);
}
console.log("Вы достигли своей цели");