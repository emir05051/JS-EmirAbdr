// let n = [1, 2, 3, 2, 3];

// const createSet = array =>
//     array.reduce((mapped, element) => {
//         !includes(mapped)(element) ? mapped.push(element) : null;
//         return mapped;
//     }, []);

// const paddEven = (length, char = " ") => str => {
//     let padding = length - str.length;

//     if (padding < 0) {
//         return str;
//     }

//     let paddingLeft = "".padStart(Math.floor(padding / 2), char);
//     let paddRight = "".padStart(Math.ceil(padding / 2), char);

//     return paddingLeft + str + paddRight
// }

let words = ["Победи", "себя", "и", "выиграешь", "тысячи", "битв"];

const frame = words => {

    // Найдем самое длинное слово
    let maxLength = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
        }
    }

    // Вывести верхнюю рамку
    let border = "".padStart(maxLength + 4, "*");
    console.log(border);

    // Вывести все слова с рамками по бокам и "padding"
    for (let i = 0; i < words.length; i++) {
        console.log("* " + paddEven(words[i], maxLength) + " *")
    }

    // Вывести нижнюю рамку
    console.log(border);
}