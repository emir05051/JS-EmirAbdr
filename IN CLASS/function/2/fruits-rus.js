// length  6
// c  h  e  r  r  y 
// 0  1  2  3  4  5 
// -6 -5 -4 -3 -2 -1

// Я горжусь своими N яблоками 

// 1 яблоком
// 2 яблоками
// 3..10 яблоками
// 11..20 яблоками
// 21 яблоком
// 31 яблоком
// 1231 яблоком
// 1211 яблоками


const nNounRus = (form1, form2) => {
  // n + " " + (n === 1 ? singular : plural);
  return (n) => {
    let word;

    if (n % 10 === 1 && n % 100 !== 11) {
      word = form1;
    } else {
      word = form2;
    }

    return n + " " + word;
  }
}

// const nItems = nNounRus("item");

// console.log("You have " + nItems(10) + " in your cart");
// console.log("You added " + nItems(2) + " in your cart");


const printWeHaveSomething = (f) => (n) => {
  console.log("Я горжусь " + f(n) + "!");
}


const printApples = printWeHaveSomething(nNounRus("яблоком", "яблоками"));
const printBananas = printWeHaveSomething(nNounRus("бананом", "бананами"));
const printFeet = printWeHaveSomething(nNounRus("ногой", "ногами"));


let apples = 0;
printApples(apples);

apples += 1;
printApples(apples);

apples += 10;
printApples(apples);

apples += 110;
printApples(apples);


let bananas = 0;
printBananas(bananas);

bananas += 1;
printBananas(bananas);

bananas += 10;
printBananas(bananas);

bananas += 110;
printBananas(bananas);


let feet = 0;
printFeet(feet);

feet += 1;
printFeet(feet);

feet += 10;
printFeet(feet);

feet += 110;
printFeet(feet);