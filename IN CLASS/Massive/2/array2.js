let numbers = [1, 3, 13, 45, 2, -1, 0];

console.log(numbers.includes(13));
console.log(numbers.includes(12));


// let indexOf13 = numbers.indexOf(13);
// numbers[indexOf13] = 100;
// console.log(numbers);

console.log(numbers.indexOf(13));
console.log(numbers.indexOf(12));


// a1 || a2 || a3 || .... || an
const includes = (array, search) => 
  array.some(item => item === search);

console.log(includes(numbers, 13));
console.log(includes(numbers, 12));


const isPositive = (n) => {
  return n > 0;
} 

// a1 && a2 && a3 && .... && an
const areAllPositive = array => 
  array.every(n => n > 0);


console.log(areAllPositive(numbers));
console.log(areAllPositive([1, 2, 4]));

const filterNegative = array => array.filter(item => item < 0);

console.log(filterNegative(numbers));
console.log(filterNegative([-1, -2, 3, -4]));

const filterNumbersEqualToIndex = array => array.filter((n, index) => n === index);

console.log(filterNumbersEqualToIndex([0, 3, 2, 4, 5, 5])) // [0, 2, 5]


const isLeapYear = (year) => year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);

// true && true && false && true && false = false
const areAllLeapYears = years => years.every(isLeapYear);
 
// false || true || true|| false || true || false = true
const areSomeLeapYears = years => years.some(isLeapYear);

