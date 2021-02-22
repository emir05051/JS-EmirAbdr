// 
// const paddRight = (char, length) => s => {
//     for (let i = 0; s.length < length; ++i) {
//         s = s + char;
//     }
//     return s;
// }
// const pad = paddRight('*', 10);

// let s = "abcd";


// console.log(pad(s), pad(s).length);
// console.log(pad("asdasdasd"), pad("dasdasdasd").length);

// let n = 10;

// while (n > 0) {
//     console.log(n);
//     n--;
// }
// for (let i = n; i > 0; i--) {
//     console.log(i);
// }


// let n = 40;
// let startYear = 1900;

// for (let i = startYear; i <= startYear + n; ++i) {
//     console.log(isLeapYear(startYear));
//     startYear += i;
// }
const isLeapYear = (year) => year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);

// const startYear = 1900;
// let year = startYear;
// let leapYears = 0;

// while (leapYears < 20) {
//     if (isLeapYear(startYear)) {
//         leapYears++;
//         console.log(startYear);
//     }
//     startYear++;
// }
// const startYear = 1900;
// let leapYears = 0;
// let year = startYear;
// while (true) {
//     if (isLeapYear(startYear)) {
//         leapYears++;
//         console.log(startYear);
//     }
//     if (leapYears >= 20) {
//         break;
//     }
//     year = year * 2;

//     year++;
// }
// let s = "abcdawddefgh";
// let n = s.length;
// for (let i = n - 1; i >= 0; i--) {
//     console.log(s[i]);
// }

// const fizzBuzz = n => {
//     if (n % 15 === 0) {
//         return "FizzBuzz";
//     } else if (n % 5 === 0) {
//         return "Buzz";
//     } else if (n % 3 === 0) {
//         return "Fizz";
//     } else {
//         return n;
//     }
// }
// let n = 100;
// const fizzBuzz = n => (n % 3 ? "" : "Fizz") + (n % 5 ? "" : "Buzz") || n;

// for (let i = 1; i < n; ++i) {
//     console.log(fizzBuzz(i));
// }
// let sum = 0;
// let n = Math.abs(-123123);
// while (n > 0) {
//     sum += n % 10;
//     n = Math.trunc(n / 10);
// }
// console.log(sum);

// 1
// 1 2
// 1 2 3 
// 1 2 3 4
// let n = 6;
// str = "";
// for (let i = 1; i <= n; ++i) {
//     let str = "";
//     for (let j = 1; j <= i; ++j) {
//         str += j;

//     }
//     console.log(str);
// }
// let n = 6;
// for (let i = 1; i <= n; i++) {
//     let str = "";
//     for (let j = 0; j < i; j++) {
//         str += i;
//     }
//     console.log(str);
// }
let n = 6;
let o = "*";
while (o.length <= n) {
    console.log(o);
    o += "*";
}