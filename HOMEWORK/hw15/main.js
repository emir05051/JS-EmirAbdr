let s = "елка";
// d c b a 
// 
const stringReverse = string => {
    if (string.length <= 1) {
        return string;
    } else {
        // let sum;
        // sum = string[string.length - 1];
        // return string.slice(string.length - 1);
        // stringReverse(string);
        return string[string.length - 1] + stringReverse(string.slice(0, string.length - 1));
    }
}

console.log(stringReverse(s))