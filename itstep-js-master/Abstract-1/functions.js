// Набор инструкции - 

// Фрагмент кода к которому можно обратиться

// Именованный фрагмент кода который может принимать и возвращаться значения

// (чистая функция FP) , процедура , (метод ООП)

// Имя + параметры . Обращаться из разных мест программы

// procedure param1 param2 
//   1
//   2
//   3
//   4

//   ??? return result

// Читабельность
// Разделять (на функции) 
// Не повторяться DRY Do not repeat yourself
// Разделение обязаностей Separation of concern



// Модуль бизнес логики

const changeBalance = (balance, amount) => balance + amount; 

const getTaxApplicator = tax => amount => amount * (1 + tax);

// const getTaxApplicator = (tax) => {
//   return amount => {
//     return amount * (1 + tax);
//   }
// } 







// Модуль конкретного использования

let applyTax = getTaxApplicator(0.3);

let balance = 0; 

// logBalance(balance);

balance = changeBalance(balance, 1500); // balance = balance + 500;
// logBalance(balance);


balance = changeBalance(balance, applyTax(-1000)); // balance = balance - 1000;
// logBalance(balance);


balance = changeBalance(balance, applyTax(-200)); // balance = balance - 1000;
// logBalance(balance);







// Модуль тестирования

const balanceChangeLogger = (inputLogger, outputLogger) => 
  (balance, amount) => {
    inputLogger && inputLogger(balance, amount);
    
    balance = changeBalance(balance, amount);
    
    outputLogger && outputLogger(balance);

    return balance
  }



const changeAndLogBalacne = balanceChangeLogger(
  (balance, amount) => console.log("Старый баланс: " + balance + " Изменяем на: " + amount),
  (balance) => console.log("Новый баланс: " + balance)
);

applyTax = getTaxApplicator(0.1);


balance = 0; 
balance = changeAndLogBalacne(balance, 1500); // balance = balance + 500;
balance = changeAndLogBalacne(balance, applyTax(-1000)); // balance = balance - 1000;
balance = changeAndLogBalacne(balance, applyTax(-200)); // balance = balance - 1000;






