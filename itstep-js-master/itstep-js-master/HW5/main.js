



const randomInt = (min, max) => 
  min + Math.floor(Math.random() * (max - min));


const createRandomArray = (min, max, length) => {
  let arr = [];
  for (let i = 0; i < length; i++){
    arr.push(randomInt(min, max));
  }
  return arr;
}

const filter = predicate => array => {
  let filtered = []; // 1 2

  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      filtered.push(array[i]);
    }
  }

  return filtered;
} 

const filterOnlyNegative = filter(n => n < 0);
const filterOnlyPositive = filter(n => n > 0);


const getSum = numbers => {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
};

const getAverage = numbers => getSum(numbers) / numbers.length;

const nNoun = (form1, form2, form3) => {
  return (n) => {

    let absN = Math.abs(n);

    // 123456
    let lastDigt = absN % 10;  // 6
    let secondToLastDigits = Math.trunc(absN / 10) % 10; // 12345 % 10 = 5 

    let word;
    if (secondToLastDigits === 1) {
      word = form3;
    } else {
      if (lastDigt === 1) {
        word = form1;
      } else if (2 <= lastDigt && lastDigt <= 4) {
        word = form2;
      } else {
        word = form3;
      }
    }

    return n + " " + word;
  }
}

const nApples = nNoun("яблоко", "яблока", "яблок");

const logBoxState = box => {
  console.log("В ящике " + nApples(box));

  if (box > 0) {
    console.log("Полная коробка");
  } else if (box === 0) {
    console.log("Пустая коробка");
  } else { // box < 0
    console.log("Кредитная коробка");
  }
}

const logTransaction = amount => {
  
  console.log("----------");
  if (amount >= 0) {
    console.log("Получили " + nApples(amount));
  } else {
    console.log("Потеряли " + nApples(Math.abs(amount)));
  }
}

const logResult = (box, goal) => {
    
  console.log("----------");
  if (box >= goal) {
    console.log("Ура мы накопили " + nApples(box) + "!");
  } else {
    console.log("Не повезло, не фартануло. Мы накопили только " + nApples(box) + " =(");
  }
}

const logStatistics = transactions => {
  let gains = filterOnlyPositive(transactions);
  let loses = filterOnlyNegative(transactions);

  console.log("Суммарный доход: " + getSum(gains));
  console.log("Суммарный расход: " + getSum(loses));

  console.log("Средний доход: " + getAverage(gains));
  console.log("Средний расход: " + getAverage(loses));
}

// ---- 
let amounts = createRandomArray(-10, 20, 30);


let goal = 100;

let box = 0;
logBoxState(box);

let transactions = [];
while (box < goal && amounts.length > 0) {
  let amount = amounts.shift();
  box += amount;

  transactions.push(amount);

  logTransaction(amount);
  logBoxState(box);
}

logResult(box, goal);
logStatistics(transactions);


