// let str = "abcdef";

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }


let arr = [1, 2, -1, 5, 16];

// arr = [1, [1, 2], 11, "asdf", (x) => x + 2, 0];

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// arr[1] = 100;
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// let matrix = [
//   [1, 2, 3],
//   [2, 3, 4],
//   [5, 6, 7]
// ]

// let row = matrix[1];
// let cell = row[2];

// console.log(matrix[1][2]);


// let tuple1 = ["Anton", 28];
// let tuple2 = ["Леон", 16];

// console.log(tuple1[0]);
// console.log(tuple2[0]);
// console.log(tuple1[1] + tuple2[1]);


const print = array => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

let array1 = [1, 4, 5, 10];
let array2 = array1;

array1[2] = 100;
array2[3] = 1000;

console.log(array1);
console.log(array2);

array1 = [1, 2, 3, 6];

console.log(array1);
console.log(array2);
array2[1] = 10000;

console.log(array1);
console.log(array2);

array2 = 123;
console.log(array1);
console.log(array2);


set(str, 1, "F");

// console.log(array1);
print(array1);
print("sadff");
// print(1);

const set = (array, index, value) => {
  array[index] = value;
}

set(array1, 2, 15);
print(array1);

const change = (array) => {
  array = [1, 2 ,3];
}

change(array1); // Изменения не вступят в силу 
print(array1);







