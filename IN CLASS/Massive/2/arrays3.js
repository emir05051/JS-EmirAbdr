let numbers = [1, 13, 45, 2, -1, 0];

const getSum = numbers => {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
};

// console.log(getSum(numbers));

const getMin = numbers => {
  let min = Infinity;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }

  return min;
}

// console.log(getMin(numbers));

const getMax = numbers => {
  let max = -Infinity;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

// console.log(getMax(numbers));

const getRange = numbers => {
  return [getMin(numbers), getMax(numbers)];
};

// console.log(getRange(numbers));

const contains = (numbers, n) => {
  for (let i = 0; i < numbers.length; i++) {
    if (n === numbers[i]) {
      return true;
    }
  }
  return false;
};

// console.log(contains(numbers, 13));
// console.log(contains(numbers, 56));


//

// Первый вариант - O(n*n + n) = O(n*n)
const getMissing1 = numbers => {
  // console.log("unsorted");

  // for (let i = 0; i < numbers.length; i++) {
  //   console.log(numbers[i]);
  // }

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

  // console.log("sorted");

  // for (let i = 0; i < numbers.length; i++) {
  //   console.log(numbers[i]);
  // }

  // 0 1 2 3

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
    if (!contains(numbers, n)) {
      return n;
    }
  }
}

// sum(1-n) - sum(numbers)
// 

// 1 2       = 1.5 1.5 = 3
// 1 2 3     = 2 2 2 = 6
// 1 2 3 4   = 2.5 2.5 2.5 2.5 = 10
// 1 2 3 4 5 = 3 3 3 3 3 = 15

const getSumN = n => n * (n + 1) / 2;

// Третий вариант - O(n)
const getMissing3 = numbers => {
  return getSumN(numbers.length + 1) - getSum(numbers);
}


// let incomplete = [1, 2, 6, 7, 3, 5, 8, 9]; /*4*/ 
// console.log(getMissing1(incomplete));
// console.log(getMissing2(incomplete));
// console.log(getMissing3(incomplete));

// incomplete = [1, 2, 4, 6, 7, 3, 5, 8, 10, 11]; /*9*/
// console.log(getMissing1(incomplete));
// console.log(getMissing2(incomplete));
// console.log(getMissing3(incomplete));



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


const randomInt = (min, max) => 
  min + Math.floor(Math.random() * (max - min));


const createRandomArray = (min, max, length) => {
  let arr = [];
  for (let i = 0; i < length; i++){
    arr.push(randomInt(min, max));
  }
  return arr;
};

// console.log(createRandomArray(-5, 20, 10));

// 1 -1 2 -2
const filterNegative = array => {
  let arr = []; // 1 2

  for (let i = 0; i < array.length; i++){
    if (array[i] >= 0){
      arr.push(array[i]);
    }
  }

  return arr;
}


let test = createRandomArray(-5, 5, 10);
// console.log(test);
// console.log(filterNegative(test));


// Set (HashSet) - набор уникальных значений
// [1, 2, 3, 3, 4, 1, 2, 90] = [1, 2, 3, 4, 90];

// 1 1 2 2
const createSet = array => {
  let set = []; // 1 2

  for (let i = 0; i < array.length; i++) {
    if (!contains(set, array[i])) {
      set.push(array[i]);
    }
  }

  return set;
};

test = createRandomArray(2, 5 , 10);
// console.log(test);
// console.log(createSet(test));



const isLeapYear = (year) => year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);

// const areAllLeapYears = years => {
//   let counter = 0;

//   for (let i = 0; i < years.length; i++){
//     if (isLeapYear(years[i])){
//       counter++;
//     }
//   }

//   if (counter === years.length){
//     return true;
//   } else{
//     return false;
//   }
// };


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

test = createRandomArray(1900, 2000 , 10);
// console.log(test);
// console.log(areAllLeapYears(test));
// console.log(areAllLeapYears([2000, 2020, 2024]));
// console.log(areSomeLeapYears(test));
// console.log(areSomeLeapYears([2001, 2300, 2025]));



// let sum = 0;

// while (n != 0) {
//   sum += n % 10;
//   n = Math.trunc(n / 10);
// }

// 123
const getDigits = n => {
  let digits = []; // 1 2 3
  
  while (n != 0) {
    digits.unshift(n % 10);
    n = Math.trunc(n / 10);
  }

  return digits;
};


let digits = getDigits(123456789);
// console.log(digits);
// console.log(getSum(digits));


let words = ["Победи", "себя", "и", "выиграешь", "тысячи", "битв"];

// *************
// * Победи    *
// * себя      *
// * и         *
// * выиграешь *
// *************

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

// frame(words);


let randoms = createRandomArray(0, 11, 10000);


// Сколько раз встречается каждое число
// Среднее значение ~5

const getAverage = numbers => getSum(numbers) / numbers.length;


// 0 - 2: 0 1 2
const analyze = (numbers, max) => {
  console.log(getAverage(numbers));

  let frequencies = []; // [0, 0, 0]
                        //  0  1  2 

  for (let i = 0; i <= max; i++) {
    frequencies[i] = 0;
  }

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    frequencies[number] += 1;
  }

  console.log(frequencies);

  const averageFrequency = getAverage(frequencies);
  
  console.log(averageFrequency);

  let diviations = [];

  for (let i = 0; i < frequencies.length; i++) {
    diviations[i] = frequencies[i] - averageFrequency;
  }

  console.log(diviations);
}

analyze(randoms, 10);