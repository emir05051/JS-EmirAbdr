const analitics = {
    randomInt: (min, max) => min + Math.floor(Math.random() * (max - min)),
    createArray: (mapFunction = index => index) => length => Array.from({ length }, (_, index) => mapFunction(index)),
    forms: ["яблок", "яблока", "яблоко"],
    negative: array => array.filter(n => n < 0),
    positive: array => array.filter(n => n >= 0),
    sum: array => array.reduce((sum, number) => sum + number, 0),
    average: array => analitics.sum(array) / array.length,
}

const log = {
    appleWord: word => {
        let letter = Math.abs(word);
        let last = letter % 10;
        let second = Math.trunc(letter / 10) % 10;
        if (second === 1) {
            return analitics.forms[0];
        } else if (last === 1 && letter !== 11) {
            return analitics.forms[2];
        } else if ((last === 0 || last === 9 || last === 8 || last === 7 || last === 6 || last === 5) || (letter >= 5 && letter <= 19) || second == 1) {
            return analitics.forms[0];
        } else {
            return analitics.forms[1];
        }
    },

    boxStatement: number => {
        if (number > 0) {
            console.log("Полная и " + number + " " + log.appleWord(number));
        }
        if (number === 0) {
            console.log("Пустая и " + number + " " + log.appleWord(number));
        }
        if (number < 0) {
            console.log("У вас кредит и " + number + " " + log.appleWord(number));
        }
    },
    Quantity: (now) => {
        if (now > 0) {
            console.log("Вы получили " + Math.abs(now) + " " + log.appleWord(now));
        } else if (now < 0) {
            console.log("Вы потеряли " + Math.abs(now) + " " + log.appleWord(now));
        } else {
            console.log("К сожалению, сегодня без яблок");
        }
    },
    logResult: (box, goal) => {
        if (box >= goal) {
            console.log("Ваша цель")
        }
    },
    logStatistics: transactions => {
        console.log("Плюс " + analitics.positive(transactions));
        console.log("Минус " + analitics.negative(transactions));

        console.log("Сренее положительное " + analitics.average(analitics.positive(transactions)));
        console.log("Сренее отрицательное " + analitics.average(analitics.negative(transactions)));
    },
}



let goal = 100;
let appleQuantity = 0;
let transaction = [];
while (appleQuantity <= goal) {
    let apples = analitics.randomInt(-1, 10);
    transaction.push(apples);
    appleQuantity += apples;
    log.Quantity(apples);
    log.boxStatement(appleQuantity);
    log.logResult(appleQuantity, goal);
}
log.logStatistics(transaction);