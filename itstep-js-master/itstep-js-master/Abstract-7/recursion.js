// Рекурсию
// Деревья  // HTMl
// Events
// Date, setTimeout, setInterval, Promise???

const reverseString = (string) => {
  let reversedString = ""

  for (let i = 0; i < string.length; i++) {
    reversedString = string[i] + reversedString;
  }

  return reversedString;
}
// "abcd" ""
  // "abc" "d"
    // "ab" "dc"
      // "a" "dcb"
        // "" "dcba"
// const reverseStringRecursive = (string, reversedString = "") => {
//   reversedString += string[string.length - 1];
//   string = string.substring(0, string.length - 1);

//   if (string.length === 0) { 
//       return reversedString;
//   } else {
//       return reverseStringRecursive(string, reversedString);
//   }
// }


// "" => ""
// "a" =>  "a"

// r("abc") => r("bc") + "a" => r("c") + "b" + "a" => "c" + "b" + "a";

const reverseStringRecursive = string => {
  if (string.length === 1) { 
    return string;
  } else {
    return reverseStringRecursive(string.slice(1)) + string[0];
  }
}


// string => string.length <= 1 ? string : (reverseStringRecursive(string.slice(1)) + string[0])





console.log(reverseString("abcd"));
console.log(reverseStringRecursive("asdfsadf"));

// 
const fibonacci = (n) => {
  if (n === 1) {
    return 0; 
  } else if (n === 2) {
    return 1;
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
}

// fibonacci[1] // 0
// fibonacci[2] // 1

// fibonacci[3] = fibonacci[2] + fibonacci[1] // 0 + 1 = 1
// fibonacci[4] = fibonacci[3] + fibonacci[2] // 1 + 1 = 2
// //...

// for (let i = 1; i < 10; i++) {
//   console.log(fibonacci(i));
// }



// [] => 0
// [10] => 10 + s([])
// s([10, 20]) => 10 + s([20]) => 10 + 20 + s([]) => 10 + 20 + 0; 
// s([1, 2, 3]) => 1 + s([2, 3]) => 1+ 2 + s([3]) => 1+ 2 + 3
const arraySumRecursive = array => {
  if (array.length === 0) { 
    return 0;
  } else {
    return array[0] + arraySumRecursive(array.slice(1));
  }
}




const ar = [1, 2, 3];
console.log(arraySumRecursive(ar));

console.log(ar);



// const isPalindromRecursive = string =>{
//     // if(string.length === 0 || string.length === 1){
//     //     return true;
//     // }
//     // if(string.length === 2){
//     //     return string[0] === string[string.length - 1] && isPalindromRecursive("");
//     // }
//     // if(string.length === 3){
//     //     return string[0] === string[string.length - 1] && isPalindromRecursive(string[2]);
//     // }
//     // if (string.length > 3){
//         if(string === reverseStringRecursive(string)){
//             return true;
//         } else{
//             return false;
//         }
//     // }
// }

// p("") => true, 
// p("f") => true, 
// p("ab") => s[0] === s[length - 1] && p(""), 
// p("abc") => s[0] === s[length - 1] && p("b")



const isPalindromRecursive = string => {
  if (string.length === 0 || string.length === 1) {
    return true;
  } else {
    return string[0] === string[string.length - 1] && isPalindromRecursive(string.slice(1, -1))
  }
}



let strings = ["a", "aa", "asa", "asd", "шалаш", "ШаЛаШ", "каКаду"];
strings.forEach(string => console.log(string + " - палиндром? Ответ - " + isPalindromRecursive(string.toLowerCase())));


// s(0) => 0, 
// s(3) => 3, 
// s(23) => (23 % 10) + s(Math.floor(23 / 10))

const numberElementsSumRecursive = (number) => {
  if (number == 0) {
    return 0;
  } else {
    return (number % 10) + numberElementsSumRecursive(Math.trunc(number / 10));
  }
}


// 3* Построить все комбинации/перестановки из заданный симоволов
  // "ab" => ["ab", "ba"] aa bb
  // "abc" => ["abc", "acb", "bac", "bca", "cab", "cba"]



// p("") => [] 
// p("a") => ["a"]
// p("ab") => ["a" + p("b"), "b" + p("a")] => ["a" + ["b"], "b" + ["a"]] => ["ab", "ba"]
// p("abc") => ["a" + p("bc"), "b" + p("ac"), "c" + p("ab")] =>
  // ["c" + ["ab", "ba"]] => ["cab" , "cba"]
const permutations = string => {
  
  if (string.length === 0) {
    return [];
  } else if (string.length === 1) {
    return [string]; // Один символ
  } else {
    const p = [];

    for (let index = 0; index < string.length; index++) {
      const char = string[index];
      const remaining = string.slice(0, index) + string.slice(index + 1);

      const subpermutations = permutations(remaining);

      p.push(...subpermutations.map(permutation => char + permutation));
    }

    return p;

    // return string.split("")
    //   .map((char, index) => 
    //     permutations(string.slice(0, index) + string.slice(index + 1))
    //       .map(p => char + p)
    //   )
    //   .flat(1);

  }
} 

console.log(permutations(""));

console.log(permutations("a"));

console.log(permutations("bc"));

console.log(permutations("abc"));