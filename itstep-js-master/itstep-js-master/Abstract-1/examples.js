// const isLeapYear = (year) => year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);


// const test = {
//   1600: true,
//   1700: false,
//   1604: true,
//   2000: true,
//   2020: true,
//   2021: false,
// }


// Object.entries(test).map(([year, answer]) => console.log(year + " " + answer + " ? " + isLeapYear(year)));




let email = "example@example.com";

console.log(email.indexOf("@") !== -1);
console.log(email.includes("@"));


let indexOfAt = email.indexOf("@");
if (indexOfAt !== -1) {
  console.log(email.slice(indexOfAt + 1));
} else {
  console.log("Неверный имэйл");
}

let url = "https://example.com?url=asdf:123";

console.log(url.startsWith("http://") || url.startsWith("https://"));

const getDomain = url => url.includes("://") ? url.slice(url.indexOf(":")+3) : false;


// if (url.startsWith("http://")) {
//   console.log(url.slice(7));
// } else if (url.startsWith("https://")) {
//   console.log(url.slice(8));
// }



