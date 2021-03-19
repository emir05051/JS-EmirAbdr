let array = [1, 2, 3, 4];
let forms = ["яблок", "яблока", "яблоко"];

const createArray = (mapFunction = index => index) => length =>
    Array.from({ length }, (_, index) => mapFunction(index));

const randomInt = (min, max) =>
    min + Math.floor(Math.random() * (max - min));

const createRandomArray = (min, max) =>
    createArray(() => randomInt(min, max));

let apples = createRandomArray(-5, 20)(10);

const log = {
    appleWord: word => {
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
    },

    boxStatement: amount => number => {
        if (number > 0) {
            console.log("Полная")
            console.log("У вас " + number + " " + log.appleWord(number));
        }
        if (number === 0) {
            console.log("Пустая")
            console.log("У вас " + number + " " + log.appleWord(number));
        }
        if (number < 0) {
            console.log("У вас кредит")
            console.log("У вас " + number + " " + log.appleWord(number));
        }
    },
    logResult: (box, goal) => {
        if (box >= goal) {
            console.log()
        }
    },
    logStatistics: transactions => console.log,
}

log.boxStatement(apples);