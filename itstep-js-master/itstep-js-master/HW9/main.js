// 3*. Используя Object.entries написать функцию которая будет принимать массив чисел и объект с операциями
// и примять эти операции к массиву с помощью .map 
// и выводить в консоль Название операции и получившийся массив 


// operations: {string: (value, index, array) => any}
const multiMap = operations => array => 
  Object.entries(operations)
    .forEach(([name, operation]) => {
      const result = array.map(operation);
      console.log(name, result);
    });

// [ 
//  ["Квадраты", n => n * n],
//  ["Делится на два",  n => n % 2 === 0],
//  [Корни",  n => Math.sqrt(n)],
// ]

multiMap({
  "Квадраты": n => n * n,
  "Делится на два": n => n % 2 === 0,
  "Корни": n => Math.sqrt(n),
}) (
  [1, 2, 3, 4]
);


const pipe = operations => array => 
  Object.entries(operations)
    .reduce((result, [name, operation]) => {
      const r = result.map(operation);
      console.log(name, r);
      return r;
    }, array);


pipe({
  "Квадраты": n => n * n,
  "Корни": n => Math.sqrt(n),
  "Делится на два": n => n % 2 === 0,
}) (
  [1, 2, 3, 4]
);
    
