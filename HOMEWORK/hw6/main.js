let apples = 0;
let forms = ["яблок", "яблока", "яблоко"];

const randomInt = (min, max) =>
    min + Math.floor(Math.random() * (max - min));

const filterNegative = array => array.filter(n => n < 0);
const filterPositive = array => array.filter(n => n >= 0);


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