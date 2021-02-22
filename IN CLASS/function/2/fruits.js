

// const nApples = (n) => {
//   if (n === 1) {
//     return "apple";
//   } else {
//     return "apples";
//   }
// }

// const nBananas = (n) => {
//   if (n === 1) {
//     return "banana";
//   } else {
//     return "bananas";
//   }
// }

// const nRegular = (word, n) => {
//   if (n === 1) {
//     return word;
//   } else {
//     return word + "s";
//   }
// }


// const nFeet = (n) => {
//   if (n === 1) {
//     return "foot";
//   } else {
//     return "feet";
//   }
// }


// length  6
// c  h  e  r  r  y 
// 0  1  2  3  4  5 
// -6 -5 -4 -3 -2 -1


const nNoun = (singular, plural) => {

  if (!plural) {
    if (singular.slice(-1) === "y") {
      plural = singular.slice(0, -1) + "ies";
    } else {
      plural = singular + "s";
    }
  }

  return (n) => {
    if (n === 1) {
      return singular;
    } else {
      return plural;
    }
  }
}

const nItems = nNoun("item");

console.log("You have " + 10 + nItems(10) + " in your cart");
console.log("You added " + 2 + nItems(2) + " in your cart");


const printWeHaveSomething = (f) => (n) => {
  console.log("We have " + n + " " + f(n) + "! Ура");
}


const printApples = printWeHaveSomething(nNoun("apple"));
const printBananas = printWeHaveSomething(nNoun("cherry"));
const printFeet = printWeHaveSomething(nNoun("foot", "feet"));


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