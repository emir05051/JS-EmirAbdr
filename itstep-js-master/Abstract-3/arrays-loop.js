console.log("Циклы");

const createArray = (mapFunction = index => index) => length => {
  const array = [];

  for (let i = 0; i < length; i++) {
    array.push(mapFunction(i));
  }

  return array;
}

let numbers = createArray()(10);
console.log("Генерируем массив", numbers);


const range = (start, end, step = 1) => 
  createArray(index => start + index * step) (Math.ceil((end - start) / step));

  
console.log("Генерируем промежуток от 1 до 10", range(1, 11));
console.log("Генерируем промежуток от 0 до -10", range(0, -11, -1));
console.log("Генерируем промежуток от 3 до 11 с шагом 2", range(3, 12, 2));



const randomInt = (min, max) => 
  min + Math.floor(Math.random() * (max - min));

const createRandomArray = (min, max) =>  length => {
  let arr = [];
  for (let i = 0; i < length; i++){
    arr.push(randomInt(min, max));
  }
  return arr;
};

let randoms = createRandomArray(-5, 20) (10);
console.log("Генерируем массив случайных чисело от -5 до 20", randoms);



numbers = createArray(index => index + 1)(9);

const getSum = numbers => {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
};

console.log("Вычисляем сумму чисел в массиве", getSum(numbers), numbers);



const getProduct = numbers => {
  let product = 1;

  for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i];
  }

  return product;
};

console.log("Вычисляем произведение чисел в массиве", getProduct(numbers), numbers);


const getMin = numbers => {
  let min = Infinity;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }

  return min;
}

console.log("Находим наименьшее число", getMin(randoms), randoms);



const getMax = numbers => {
  let max = -Infinity;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

console.log("Находим наибольшее число", getMax(randoms), randoms);


const getRange = numbers => {
  return [getMin(numbers), getMax(numbers)];
};


console.log("Находим промежуток в котором лежат числа массива", getRange(randoms), randoms);



const includes = (numbers, n) => {
  for (let i = 0; i < numbers.length; i++) {
    if (n === numbers[i]) {
      return true;
    }
  }
  return false;
};

console.log("Содержится ли элемент в массиве", includes(randoms, 0), randoms);
console.log("Содержится ли элемент в массиве", includes(randoms, 1), randoms);




// Первый вариант - O(n*n + n) = O(n*n)
const getMissing1 = numbers => {
  // Сортировка "пузырьком"
  
  let temp = 0;
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] > numbers[j]) {
          temp = numbers[i];
          numbers[i] = numbers[j];
          numbers[j] = temp;
      }
    }
  }

  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] + 1 != numbers[i + 1]){
      return numbers[i] + 1;
    }
  }
};

// 1 2 4 length = 3 
// 1 2 3 4 
// Вариант вариант - O(n*n)
const getMissing2 = numbers => {
  for (let n = 1; n <= numbers.length + 1; n++) {
    if (!includes(numbers, n)) {
      return n;
    }
  }
}

// sum(1-n) - sum(numbers)

// 1 2       = 1.5 1.5 = 3
// 1 2 3     = 2 2 2 = 6
// 1 2 3 4   = 2.5 2.5 2.5 2.5 = 10
// 1 2 3 4 5 = 3 3 3 3 3 = 15
const getSumN = n => n * (n + 1) / 2;

// Третий вариант - O(n)
const getMissing3 = numbers => {
  return getSumN(numbers.length + 1) - getSum(numbers);
}


let incomplete = [1, 2, 6, 7, 3, 5, 8, 9]; /*4*/ 
console.log("Находим пропущеное число ", getMissing1(incomplete), incomplete);
console.log("Находим пропущеное число ", getMissing2(incomplete), incomplete);
console.log("Находим пропущеное число ", getMissing3(incomplete), incomplete);

incomplete = [1, 2, 6, 4, 7, 3, 5, 8, 10]; /*9*/ 
console.log("Находим пропущеное число ", getMissing1(incomplete), incomplete);
console.log("Находим пропущеное число ", getMissing2(incomplete), incomplete);
console.log("Находим пропущеное число ", getMissing3(incomplete), incomplete);



// 1 -1 2 -2
const filterNegative = array => {
  let arr = []; // 1 2

  for (let i = 0; i < array.length; i++){
    if (array[i] < 0){
      arr.push(array[i]);
    }
  }

  return arr;
}

console.log("Оставляем только отрицательные элементы массива ", filterNegative(randoms), randoms);



// Set (HashSet) - набор уникальных значений
// [1, 2, 3, 3, 4, 1, 2, 90] = [1, 2, 3, 4, 90];

// 1 1 2 2
const createSet = array => {
  let set = []; // 1 2

  for (let i = 0; i < array.length; i++) {
    if (!includes(set, array[i])) {
      set.push(array[i]);
    }
  }

  return set;
};

console.log("Создаем множество ", createSet(randoms), randoms);




const isLeapYear = (year) => year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);

// true && true && false && true && false = false
const areAllLeapYears = years => {
  for (let i = 0; i < years.length; i++) {
    if (!isLeapYear(years[i])){
      return false;
    }
  }

  return true;
};

// false || true || true|| false || true || false = true
const areSomeLeapYears = years => {
  for (let i = 0; i < years.length; i++) {
    if (isLeapYear(years[i])){
      return true;
    }
  }

  return false;
};

const years = createRandomArray(1900, 2000) (10);

console.log("Все года високосные",  areAllLeapYears(years), years);
console.log("Хотя бы один год високосный",  areSomeLeapYears(years), years);


const getDigits = n => {
  let digits = []; // 1 2 3
  
  while (n != 0) {
    digits.unshift(n % 10);
    n = Math.trunc(n / 10);
  }

  return digits;
};


let number = 123456789;
console.log("Получаем массив цифр числа ", getDigits(number), number);



const paddEven = (str, length, char = " ") => {
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

  let frequencies = []; // [0, 0, 0]
                        //  0  1  2 

  for (let i = 0; i <= max; i++) {
    frequencies[i] = 0;
  }

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    frequencies[number] += 1;
  }

  console.log("Частота генерации каждого из чисел ", frequencies);

  const averageFrequency = getAverage(frequencies);
  
  console.log("Средняя частота", averageFrequency);

  let diviations = [];

  for (let i = 0; i < frequencies.length; i++) {
    diviations[i] = frequencies[i] - averageFrequency;
  }

  console.log("Отклонения частот от среднего", diviations);
}

analyze(createRandomArray(0, 11) (1000), 10);

// // Стэк push + pop или unshift + shift
// // Добавить в конец
// console.log(numbers.push(10000));
// console.log(numbers);

// // Удалить с конца
// console.log(numbers.pop());
// console.log(numbers);

// console.log([].pop());


// // Добавить в начало
// console.log(numbers.unshift(10000));
// console.log(numbers);

// // Удалить с начала
// console.log(numbers.shift());
// console.log(numbers);

// console.log([].pop());


// // Очередь
// // Добавить в конец
// console.log(numbers.push(10000));
// console.log(numbers);

// // Удалить с начала
// console.log(numbers.shift());
// console.log(numbers);

// // Добавить в начало
// console.log(numbers.unshift(10000));
// console.log(numbers);

// // Удалить с конца
// console.log(numbers.pop());
// console.log(numbers);


