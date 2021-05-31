let re = /([^ ]+@(?<domain>[^ ]+\.[^ ]+))/g;

// console.log(re.test("asdf@asdf.ru"));
console.log(re.exec("asdf@asdf.ru"));

console.log("asdf@asdf.ru asdf@asdf.ru".match(re));

let matches = "asdf@asdf.ru qwer@qwer.ru".matchAll(re);

console.log("asdf@asdf.ru qwer@qwer.ru".replace(re, "$<domain>"));

console.log(Array.from(matches));

console.log("1 asdf 234 asdf 12 adsasdf 121"
  .replace(/\d+/g, 
    match => "(" + Math.pow(Number(match), 2) + ")"
));


"(1) asdf (23423141234) asdf (144) adsasdf (1211234123)"
// re.test(string) => boolean
// re.exec(string) => Match

// string.search(re) => bool
// string.match(re) => [string]
// string.matchAll(re) => [Match]
// string.replace(re, string | (match, ...arh) => string) => string