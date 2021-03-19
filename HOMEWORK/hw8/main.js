const join = (char, ...array) => {
    let arr = array.flat(Infinity);
    let len = arr.length;
    let string = "";
    for (let i = 0; i < len - 1; ++i) {
        arr[i] = arr[i] + char;
    }
    for (let i = 0; i < len; ++i) {
        string += arr[i];
    }
    console.log(string);
}

let numbers = [1, 2, 3, [1, 2]];
let char = ":";



console.log(join(char, numbers));