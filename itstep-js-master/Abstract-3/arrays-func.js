console.log("Функции");

const createArray = (mapFunction = index => index) => length => 
  Array.from({ length }, (_, index) => mapFunction(index));


let numbers = createArray()(10);
console.log("Генерируем массив", numbers);



// 0 1 2 3 4 - indexes
// 0 2 4 6 8 - step=2
// 0 3 6 9 12 - step=3
// 6 9 12 15 18 - step=3, start=6

// 0 - 10 
// step=1 => 10 
// step=2 => 5
// step=3 => 4 0, 3, 6, 9, (12)
const range = (start, end, step = 1) => 
  createArray(index => start + index * step ) (Math.ceil((end - start) / step));

console.log("Генерируем промежуток от 1 до 10", range(1, 11));
console.log("Генерируем промежуток от 0 до -10", range(0, -11, -1));
console.log("Генерируем промежуток от 3 до 11 с шагом 2", range(3, 12, 2));



const randomInt = (min, max) => 
  min + Math.floor(Math.random() * (max - min));

const createRandomArray = (min, max) => 
  createArray(() => randomInt(min, max));

let randoms = createRandomArray(-5, 20) (10);
console.log("Генерируем массив случайных чисело от -5 до 20", randoms);



numbers = createArray(index => index + 1)(9);

// const getSum = numbers => {
//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }

//   return sum;
// };
const getSum = numbers => 
  numbers.reduce((sum, number) => sum + number, 0);
console.log("Вычисляем сумму чисел в массиве", getSum(numbers), numbers);


const getProduct = numbers => 
  numbers.reduce((product, number) => product * number, 1);
console.log("Вычисляем произведение чисел в массиве", getProduct(numbers), numbers);


const getMin = numbers => 
  numbers.reduce((min, number) => number < min ? number : min, Infinity);
// const getMin = numbers => numbers.reduce((min, number) => Math.min(min, number), Infinity);
// const getMin = numbers => Math.min(...numbers);

console.log("Находим наименьшее число", getMin(randoms), randoms);



// 1 -1 4 2 10 8 (max  10)
// index    max           number    return
// 0        -Infinity     1         1 (number)
// 1        1             -1        1 (max)
// 2        1             4         4 (number)
// 3        4             2         4 (max)
// 4        4             10        10(number)
// 5        10            8         10(max)
// retrun 10;
const getMax = numbers => 
  numbers.reduce((max, number) => number > max ? number : max, -Infinity);

console.log("Находим наибольшее число", getMax(randoms), randoms);



const getRange = numbers => [getMin(numbers), getMax(numbers)];

console.log("Находим промежуток в котором лежат числа массива", getRange(randoms), randoms);




const includes = array => search => 
  array.some(item => item === search);

const incl = includes(randoms);
console.log("Содержится ли элемент в массиве", incl(0), randoms);
console.log("Содержится ли элемент в массиве", incl(1), randoms);


console.log("Содержится ли элемент в массиве", randoms.includes(0), randoms);
console.log("Содержится ли элемент в массиве", randoms.includes(1), randoms);

console.log("Индекс элемента в массиве", randoms.indexOf(0), randoms);
console.log("Индекс элемента в массиве", randoms.indexOf(1), randoms);


// Первый вариант - O(n*n + n) = O(n*n)
const getMissing1 = numbers => {
  numbers = numbers.slice().sort((a, b) => a - b); 
  // < 0  a < b
  // 0    a = b
  // > 0  a > b

  // 1 2 4
  // 1 + 1 = 2
  // 2 + 1 = 4 !неверно 
  return 1 + numbers.find((number, index) => number + 1 != numbers[index + 1]);
};

// Вариант вариант - O(n*n)
const getMissing2 = numbers => 
  range(1, numbers.length + 1).find(n => !includes(numbers) (n));


const getSumN = n => n * (n + 1) / 2;

// Третий вариант - O(n)
const getMissing3 = numbers => 
  getSumN(numbers.length + 1) - getSum(numbers);


let incomplete = [1, 2, 6, 7, 3, 5, 8, 9]; /*4*/ 
console.log("Находим пропущеное число ", getMissing1(incomplete), incomplete);
console.log("Находим пропущеное число ", getMissing2(incomplete), incomplete);
console.log("Находим пропущеное число ", getMissing3(incomplete), incomplete);


incomplete = [1, 2, 6, 4, 7, 3, 5, 8, 10]; /*9*/ 
console.log("Находим пропущеное число ", getMissing1(incomplete), incomplete);
console.log("Находим пропущеное число ", getMissing2(incomplete), incomplete);
console.log("Находим пропущеное число ", getMissing3(incomplete), incomplete);



// 1 -1 2 -2
const filterNegative = array => 
  array.filter(item => item < 0);

console.log("Оставляем только отрицательные элементы массива ", filterNegative(randoms), randoms);



const createSet = array => 
  array.reduce((set, element) => {
    !includes(set)(element) && set.push(element);
    return set;
  }, []);


console.log("Создаем множество ", createSet(randoms), randoms);



const isLeapYear = (year) => year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);

// true && true && false && true && false = false
const areAllLeapYears = years => years.every(isLeapYear);
 
// false || true || true|| false || true || false = true
const areSomeLeapYears = years => years.some(isLeapYear);

const years = createRandomArray(1900, 2000) (10);

console.log("Все года високосные",  areAllLeapYears(years), years);
console.log("Хотя бы один год високосный",  areSomeLeapYears(years), years);


// Т.к цикл while имеет не фиксированное количество итераций
// Функции для работы с массивом нам не помогут
const getDigits = n => {
  let digits = []; // 1 2 3
  
  while (n != 0) {
    digits.unshift(n % 10);
    n = Math.trunc(n / 10);
  }

  return digits;
};


let digits = getDigits(123456789);

let number = 123456789;
console.log("Получаем массив цифр числа ", getDigits(number), number);


const paddEven = (length, char = " ") => str => {
  let padding = length - str.length;

  if (padding < 0) {
    return str;
  }

  let paddingLeft = "".padStart(Math.floor(padding / 2), char);
  let paddRight = "".padStart(Math.ceil(padding / 2), char);

  return paddingLeft + str + paddRight
}

const frame = words => {
  // Найдем самое длинное слово
  let maxLength = getMax(words.map(word => word.length))

  // // Заготовить рамку
  let border = "".padStart(maxLength + 4, "*");
  const padWord = paddEven(maxLength);

  let lines = [
    border, 
    ...words.map(word => "* " + padWord(word) + " *"), 
    border
  ];

  lines.forEach(line => console.log(line));
}


// *************
// * Победи    *
// * себя      *
// * и         *
// * выиграешь *
// *************

let words = ["Победи", "себя", "и", "выиграешь", "тысячи", "битв"];

frame(words);




const getAverage = numbers => getSum(numbers) / numbers.length;

const analyze = (numbers, max) => {
  console.log("Анализируем генератор случайных чисел от 0 до " + max);

  console.log("Среднее значение ", getAverage(numbers));


  let frequencies = Array.from({ length: max + 1}).fill(0);
  //createArray(() => 0) (max + 1);



  numbers.forEach(number => frequencies[number] += 1);
  console.log("Частота генерации каждого из чисел ", frequencies);


  const averageFrequency = getAverage(frequencies);
  console.log("Средняя частота", averageFrequency);


  let diviations = frequencies.map(frequency => frequency - averageFrequency);
  console.log("Отклонения частот от среднего", diviations);
}

analyze(createRandomArray(0, 11) (1000), 10);



/// splice

let array;

// Удалить один элемент 
array = [0, 1, 2, 3, 4, 5];
array.splice(1, 1); // Удаляем элемент с индексом 1
console.log(array);

// Удалить несколько элементов
array = [0, 1, 2, 3, 4, 5];
array.splice(1, 3); // Удаляем 3 элемента начиная с индекса 1
console.log(array);

// Заменить один элемент
array = [0, 1, 2, 3, 4, 5];
array.splice(1, 1, "a"); // Заменяем элемент с индексом 1 на "a"
console.log(array);

// Заменить последовательность элементов на другую последовательность
array = [0, 1, 2, 3, 4, 5];
array.splice(1, 3, "a", "b", "c"); // Заменяем 3 элемента начиная с индекса 1 на элементы "a", "b", "c"
console.log(array);

// Вставить новый элемент(ы) в определенную позицию 
array = [0, 1, 2, 3, 4, 5];
array.splice(1, 0, "a", "b"); // Вставляем "a" на позицию с индеком 1
console.log(array);


array = [0, 1, 2, 3, 10];

let array2 = [-1, ...array];
array2 = [...array, 4];

array2 = [-2, -1, ...array, 4, 5];

array2 = [-2, -1, ...array, 4, 5, ...(false ? [1 , 2] : [])];

console.log(array2);



const join = (glue, ...numbers) => {
  console.log(numbers);
  return numbers.join(glue);
}

console.log("Склеиваем элементы", join("--", 1, 2, 3, 4, 10, 20));

console.log("Склеиваем элементы", join("--", ...[1, 2, 3, 4, 10, 20]));


const segment = [0, 20];
console.log(createRandomArray(...segment) (10));


for (let index = 0; index < array.length; index++) {
  console.log(array[index]);
}

// Устарело, желательно не использовать
for (const index in array) {
  console.log(array[index]);
}

// Можно использовать
// Но зачем, если есть array.forEach, array.map и т.д.
for (const value of array) {
  console.log(value);
}


let arrayOfArray = [[1, 2], 3, [[4, 5], 6], 7];
console.log(arrayOfArray);
console.log(arrayOfArray.flat(Infinity));




/// 

const reduce = (array) => {
  let accumulator = ""; // НАЧАЛЬНОЕ ЗНАЧЕНИЕ

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const result = str + element + ((index < array.length - 1) ? glue : "") //doSomething(element);// ДЕЛАЕМ ОПЕРАЦИЮ С ЭЛЕМЕНТОМ
    accumulator += result; // Добавляем результат в аккумулятор
  }

  return accumulator;
}


const join2 = (glue, array) => 
  array.reduce(
    (str, element, index) => str + element + ((index < array.length - 1) ? glue : ""), 
    ""
  );

console.log(join2("--", array));


// Мы выполняем оперцию над каждым элементом исходного массива
// и накапливаем результаты В ЛЮБоМ виде в аккумулятор и возвращаем его 
array.reduce(operation, startValue);


const map = (array) => {
  let mappedArray = []; // Новый массив

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const result = doSomething(element);// ДЕЛАЕМ ОПЕРАЦИЮ С ЭЛЕМЕНТОМ
    mappedArray.push(result); // Добавляем результат в новый массив
  }

  return mappedArray;
}

const map = (array, operation) => 
  array.reduce((mapped, element, index) => mapped.push(operation(element, index)), [])



// Нужно получить новый массив, в котором для кажого элемента из исходного
// будет новое трнсформированное значение 
// т.е [1,2,3] => [1,4,9]
array.map(operation)


const filter = (array) => {
  let filterArray = []; // фильтрованные массив

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const result = predicat(element);// проверяем соответсвие элемента условию
    if (result) {
      filterArray.push(element); // Добавляем элемент в отфильтрованный массив
    }
  }

  return filterArray;
}

const map = (array, predicate) => 
  array.reduce((filtered, element, index) => {
    if (predicate(element, index)) {
      filtered.push(element); 
    } 
    return filtered;
  }, []);



array.filter(predicate)


const every = (array, predicate) => {
  
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (!predicate(element)) {
      return false;
    }
  }
  return true;
}

//        [0, 1, -1, 2];
// (((true && true) && true) && false) && true;
// false

const every = (array, predicate) =>
  array.reduce((result, element, index) => result && predicate(element, index), true);

array.every(predicate);
// array.some

