areEqual = (city1, city2) => {
  if (city1 === city2) {
    return true;
  }
};
isNotDate = (value) => {
  const re = /\d\d[\.\/]\d\d[\.\/]\d\d\d\d/gm;
  const massive = value.match(re);
  if (massive.length == null) {
    return true;
  }
};
isNotANumber = (value) => {
  const re = /[a-zA-Zа-яА-ЯЁёöçәíł\-_ `']+/gm;
  const massive = value.match(re);
  if (massive.length != 1) {
    return true;
  }
};
areGreater = (Date1, Date2) => {
  if (Date1.parse() >= Date2.parse()) {
    return true;
  }
};
