const apple = {
    color: "Зеленый",
    price: 100
}

const book1 = {
    isbn: "001-123-FD-12",
    title: "Алиса в стране чудес",
    author: "Льюис Кэрол",
    year: 1865,
    cover: "./covers/alice.jpg"
}

const book2 = {
    isbn: "000-120-FA-12",
    title: "Колобок",
    author: "Народ",
    year: 1200,
    cover: "./covers/kolobock.jpg"
};

const book3 = {
    title: "Русалочка",
    font: "12px",
    price: 1000,
};

console.log(book1)
console.log(book2)

const printBook = book => {
    console.log(book.title + " - " + book.author)
}


printBook(book1)
printBook(book2)
printBook(book3)

const items = [apple, book3, apple];

console.log(items)

const sumPrice = items =>
    items.reduce((sum, item) => sum + item.price, 0)

console.log(sumPrice(items))
console.log(sumPrice([apple, book3, apple]))

const operations = {
    "Прибавить 2": n => n + 2,
    "Умножить на 2": n => n * 2,
    "Возвести в квадрат": n => n * n
}

Object.entries(operations).forEach(([key, value]) => {
    console.log(key + ": " + value(10));
});

const person = ["Антон", 28, "яблоко", "апельсин", "конфета"]

const [name, age, ...favoriteFood] = person;

console.log(name + " " + age)
console.log(favoriteFood)
console.log(person)
    // Duck typing = Утиная типизация