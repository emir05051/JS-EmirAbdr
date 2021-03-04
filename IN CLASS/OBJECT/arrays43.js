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

// Duck typing = Утиная типизация