const arraySumRecursive = array => {
    if (array.length === 0) {
        return 0;
    } else {
        return array[0] + arraySumRecursive(array.slice(1));
    }
}

// const arraySumRecursive = array => {
//   if (array.length === 0) { 
//     return 0;
//   } else {
//     return array.shift() + arraySumRecursive(array);
//   }
// }

console.log(arraySumRecursive([1, 2, 3, 4]));