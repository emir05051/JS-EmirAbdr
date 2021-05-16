// length  6
// c  h  e  r  r  y 
// 0  1  2  3  4  5 
// -6 -5 -4 -3 -2 -1

const nNounEng = (singular, plural) => {

  if (!plural) {
    plural = 
      singular.slice(-1) === "y"
      ? singular.slice(0, -1) + "ies"
      : singular + "s";

    // if (singular.slice(-1) === "y") {
    //   plural = singular.slice(0, -1) + "ies";
    // } else {
    //   plural = singular + "s";
    // }
  }

  return (n) => n + " " + (n === 1 ? singular : plural);
  // if (n === 1) {
  //   return n + " " + singular;
  // } else {
  //   return n + " " + plural;
  // }
}

const nItems = nNounRus("item");

console.log("You have " + nItems(10) + " in your cart");
console.log("You added " + nItems(2) + " in your cart");


const printWeHaveSomething = (f) => (n) => {
  console.log("We have " + f(n) + "! Ура");
}


const printApples = printWeHaveSomething(nNounRus("apple"));
const printBananas = printWeHaveSomething(nNounRus("cherry"));
const printFeet = printWeHaveSomething(nNounRus("foot", "feet"));


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