// Самостоятельно реализовать функцию join (т.е. не использвоать встренную в джаваскрипт)

// - должна работать и с массивами и с списком аргументов
//   join("-", ...[1, 2, 3]) => 1-2-3
//   join("-", 1, 2, 3) => 1-2-3
//   * Ввести поддержку такого вызова join("-", [1, 2, 3]) => 1-2-3

// - используем либо циклы, либо функции массивов

const join = glue => (...array) => 
  array
    .flat(Infinity)
    .reduce((str, element, index) => str + (index === 0 ? "" : glue) + element, "");

// let str = "";
// for (let index = 0; index < array.length; index++) {
//   str = str + (index === 0 ? "" : glue) + array[index];
// }


console.log(join("---")(1, 2, 3, 5, [1, 2], [3, [3, 4]]));
console.log(join("*")(["asdf", 2, "asdf", 5]));

