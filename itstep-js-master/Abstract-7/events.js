
const randomInt = (min, max) => 
min + Math.floor(Math.random() * (max - min));

const createArray = (mapFunction = index => index) => length => 
Array.from({ length }, (_, index) => mapFunction(index));

const createRandomArray = (min, max) => 
createArray(() => randomInt(min, max));

// ---

class Box {
  amount;

  listeners = {
    "amountChanged": [] // (amount, transaction, box) => void;
  };

  constructor(amount = 0) {
    this.amount = amount;
  }
  
  addEventListener(eventName, handler) {
    this.listeners[eventName].push(handler);
  }

  changeAmount(transaction) {
    this.amount += transaction;
    
    // Оповещаем подписчиков, сообщаем транзакцию и новое состояник коробки, и коробку
    this.listeners["amountChanged"]
      .forEach(handler => handler(this.amount, transaction, this));
  }
} 



// ---- 
let amounts = createRandomArray(-10, 20) (30);

let goal = 100;

let box = new Box();

box.addEventListener("amountChanged", (_, transaction) => {
  console.log("Новая транзакция: ", transaction);
});

box.addEventListener("amountChanged", (amount) => {
  console.log("Новая состояние коробки: ", amount);
});

// box.addEventListener("amountChaged", (amount, transaction) => {
//   document.body.append(e("div", {}, "Новая транзакция: " + transaction))
// });


// let box = new Box(["груша", "груши", "груш"]);


console.log(box);
// log.boxState(box);

let transactions = [];

while (box.amount < goal && amounts.length > 0) {
  let amount = amounts.shift();
  box.changeAmount(amount);

  transactions.push(amount);

  // log.transaction(box, amount);
  // log.boxState(box);
}

// log.result(box, goal);
// log.statistics(transactions);
