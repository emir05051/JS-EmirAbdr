const book1 = {
  title: "Метро 2033",
  author: "Дмитрий Глуховский",
  year: 2005,
  price: 2000
};

const book2 = {
  title: "Метро 2034",
  author: "Дмитрий Глуховский",
  year: 2009,
  price: 3000
};

const book3 = {
  title: "Крестный Отец",
  author: "Марио Пьюзо",
  year:  1969,
  price: 1500,
};


const book4 = {
  price: null,
  year: 1969
};

const books = [book1, book2, book3, book4];

console.log(books);

books.forEach(item => console.log(item.price));


const getSum = numbers => 
  numbers.reduce((sum, number) => sum + number, 0);

const getMin = numbers => 
  numbers.reduce((min, number) => number < min ? number : min, Infinity);


const createSet = array => 
  array.reduce((set, element) => {
    !set.includes(element) && set.push(element);
    return set;
  }, []);


const getProperties = (key, defaultValule = null) => 
  objects => objects.map(object => object[key] || defaultValule);

const getPrices = getProperties("price", 0);
const getTitles = getProperties("title", "Н/Д");
const getYears = getProperties("year");
const getAuthors = getProperties("author");

// const getPrices = items => items.map(item => item.price);

// const totalCost = items => 
//   items.reduce((sum, item) => sum + item.price, 0);
const totalCost = items => getSum(getPrices(items));

console.log("Итоговая сумма: ", totalCost(books), getPrices(books));

// const getTitles = items => items.map(item => item.title);

console.log("Все названия: ", getTitles(books));
console.log("Все года: ", getYears(books));

const getOldestBookYear = books => 
  getMin(
    getYears(books).filter(year => year !== null)
  );

const getOldestBook = books => {
  const minYear = getOldestBookYear(books);
  return books.filter(book => book.year === minYear);
}

// const getOldestBook = books => 
//   books.reduce((oldest, book) => book.year < oldest.year ? book : oldest, { year: Infinity });


console.log("Древнейшая книга (год): ", getOldestBookYear(books), getYears(books));
console.log("Древнейшая книга: ", getOldestBook(books), getYears(books));


const getAllAuthors = books => createSet(getAuthors(books));
console.log("Список авторов: ", getAllAuthors(books));
