const book1 = {
    title: "Хоббит",
    author: "Джон Рональд Руэл Толкин",
    year: 1937,
    price: 500
}

const book2 = {
    title: "Гарри Поттер и философский камень",
    author: "Джоан Роулинг",
    year: 1997,
    price: 2000
};

const book3 = {
    title: "Крестный отец",
    author: "Марио Пьюзо",
    year: 1969,
    price: 1500
};

const book4 = {
    title: "Словарь",
    author: "Даль",
    year: "",
};

let title = "author";
const books = [book1, book2, book3, book4];

console.log(books);


const totalCost = items => items.reduce((sum, item) => sum + item.price, 0);
console.log(totalCost(books));
// Object.entries(operations).forEach(([key, value]) => {
//     console.log(key + ": " + value(10));
// });
// const getPrices = items => items.map(item => item.price);

// const getTitles = items => items.map(item => item.title);

const getProperties = (key, defaultValue = null) =>
    objects => objects.map(object => typeof(object[key]) !== "undefined" ? object[key] : 0);


const getPrices = getProperties("price", 0);
const getTitles = getProperties("title", "Н/Д");
const getYears = getProperties("year");

const getMin = numbers =>
    numbers.reduce((min, number) => number < min ? number : min, Infinity);


console.log(getPrices(books));

console.log(getTitles(books));

console.log(getYears(books));

const oldestBookYear = book => getMin(getYears(books).filter(year => year !== null));

const getOldestBook = books => books.filter(book => book.year === getOldestBookYear(books));

const getAllAuthors = books => createSet(books.map(book => book.author));


console.log(oldestBookYear(books))