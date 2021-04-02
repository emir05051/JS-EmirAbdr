//SUMM

const number = 19046;


const sumNumber = number => {
    number = Math.abs(number);
    if (number <= 9) {
        return number;
    } else {
        return sumNumber(Math.floor(number / 10)) + sumNumber(number % 10);
    }
}

console.log(sumNumber(number));

// drm

const s = "esddedse";

const isPalindrom = string => {
    if (string.length <= 1) {
        return true;
    } else {
        return string[0] === string[string.length - 1] && isPalindrom(string.slice(1, -1));
    }
}
console.log(isPalindrom(s));