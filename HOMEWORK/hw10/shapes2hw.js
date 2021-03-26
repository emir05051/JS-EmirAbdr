const arraySumRecursive = array => {
    if (array.length === 0) {
        return 0;
    } else {
        return arraySumRecursive(array[array.length]);
    }
}

console.log(arraySumRecursive([1, 2, 3, 4]));