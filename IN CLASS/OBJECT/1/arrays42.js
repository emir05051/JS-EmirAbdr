const array = ["value", 2, 5, 4, 7]

const obj = {
    key: "value",
    func: () => "something",
    child: {
        key2: "value2"
    },
    0: 1,
    "some-key": "some-value",

};

console.log(obj["key"])
console.log(obj.key)
console.log(obj.func())
console.log(obj.child.key2)
console.log(obj["some-key"]);



obj.newKey = "newValue";

console.log(obj)

const arrayLike = {
    0: 1,
    1: 2,
    length: 2,
}


console.log(Array.from(arrayLike, e => e + 1))

console.log(console);
console.log(Math["floor"](30.3));

array["reverse"]();

console.log(array);

////

console.log(typeof 1);
console.log(typeof NaN);
console.log(typeof Infinity);


console.log(typeof "");
console.log(typeof "da");


console.log(typeof []);
console.log(typeof [1, 2, 3]);
console.log(typeof [1, 2, "asas", [1, 2]]);
console.log(typeof {});
console.log(typeof { key: "value", key2: 2 });
console.log(typeof null);


console.log(typeof undefined);
console.log(typeof nonwwwwwq);

console.log(typeof true);

console.log(typeof(() => 1));
console.log(typeof true < Math.floor);
console.log(typeof [].reduce);


console.log(typeof "10" === "number")

const sum = (a, b) => {

    if (typeof a !== "number") {
        a = Number(a);
    }
    if (typeof b !== "number") {
        b = Number(b);
    }
    return a + b;

}


const sumArray = numbers => {
    if (numbers instanceof Array) {
        return numbers.reduce((sum, number) => sum + number, 0);

    }
    console.log("Ошибка")

}
console.log(
    sumArray(null)
);