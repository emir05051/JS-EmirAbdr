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


let logBalance = (balance) => {
  console.log("Ваш баланс: " + balance + "тг.");

  if (balance > 0) {
    console.log("Все ок");
  } else if (balance === 0) {
    console.log("Пусто");
  } else {
    console.log("У вас должок");
  }
}

console.log(logBalance);


let balance = 0;
logBalance(balance);

balance += 500; // balance = balance + 500;
logBalance(balance);

balance -= 1000; // balance = balance - 1000;
logBalance(balance);
