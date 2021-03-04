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
/



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