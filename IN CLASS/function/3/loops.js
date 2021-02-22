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
let s = "abcdawddefgh";
let n = s.length;
for (let i = n - 1; i >= 0; i--) {
    console.log(s[i]);
}