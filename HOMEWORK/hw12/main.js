class Rectangle {

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    print() {
        console.log("Прямоугольник: " + this.width + ", " + this.height);
    };

    get perimeter() {
        return (this.width + this.height) * 2;
    };

    get area() {
        return this.width * this.height;
    }
}



class Square extends Rectangle {
    constructor(width) {
        super(width, width);
    }

    print() {
        console.log("Квадрат: " + this.width);
    };
}


class Circle {
    radius = 0;

    constructor(radius) {
        this.radius = radius;
    }

    print() {
        console.log("Круг: " + this.radius)
    };

    get perimeter() {
        return 2 * Math.PI * this.radius;
    };

    get area() {
        return Math.PI * this.radius * this.radius;
    };

}

class Triangle {

    constructor(a = 0, b = 0, c = 0) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    print() {
        console.log("Треугольник: " + this.a + ", " + this.b + ", " + this.c);
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        const p = this.perimeter / 2;
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    }


    static areEqual(t1, t2) {
        this.a
        if (t1 instanceof Triangle && t2 instanceof Triangle) {
            const sides1 = [t1.a, t1.b, t1.c].sort();
            const sides2 = [t2.a, t2.b, t2.c].sort();

            return sides1[0] === sides2[0] && sides1[1] === sides2[1] && sides1[2] === sides2[2];

            // console.log(sides1, sides2, sides1.toString(), sides2.toString());
            // return sides1.toString() === sides2.toString();
        } else {
            return false;
        }
    }
}


class EquilateralTriangle extends Triangle {
    constructor(a = 0) {
        super(a, a, a);
    }

    print() {
        console.log("Равносторонний треугольник: " + this.a);
    }
}

const shapes = [
    new Rectangle(200, 50),
    new Rectangle(150, 20),
    new Square(100),
    new Square(150),
    new Circle(100),
    new Circle(200),
    new Triangle(100, 150, 200),
    new Triangle(300, 400, 500),
    new EquilateralTriangle(100),
    new EquilateralTriangle(200),
];



console.log(shapes);

shapes.forEach(shape => shape.print());

console.log("Периметры:", shapes.map(shape => shape.perimeter));

console.log("Площади:", shapes.map(shape => shape.area));


// const sortedShapes = shapes.slice();

// sortedShapes.sort(Shape.comaparePerimeters);
// console.log(sortedShapes);


const t1 = new Triangle(100, 200, 300);
const t2 = new Triangle(100, 200, 300);
const t3 = new Triangle(200, 100, 300);
const t4 = new Triangle(600, 500, 300);
const t5 = new EquilateralTriangle(100);
const t6 = new Triangle(100, 100, 100);

t1.areEqual();

console.log(Triangle.areEqual(t1, t2)) // true
console.log(Triangle.areEqual(t1, t3)) // true
console.log(Triangle.areEqual(t1, t4)) // false
console.log(Triangle.areEqual(t1, t5)) // false
console.log(Triangle.areEqual(t5, t6)) // true



/////////////
// 3. В продолжение яблок
// 3.1 Первратить ящик Box в полноценный объект с конструктором и прототипом

// 3.2 Добавить метод getQuantityString на основании nWord 

// Первый вариант
// const appleBox = new Box(["яблоко", "яблока", "яблок"]);

// Второй вариант
// const appleBox = new Box(nWord((["яблоко", "яблока", "яблок"]));

// appleBox.getQuantityString(10) // 10 яблок


// ....
// const pearBox = new Box(["груша", "груши", "груш"]);

const randomInt = (min, max) =>
    min + Math.floor(Math.random() * (max - min));

const createArray = (mapFunction = index => index) => length =>
    Array.from({ length }, (_, index) => mapFunction(index));

const createRandomArray = (min, max) =>
    createArray(() => randomInt(min, max));


const analitics = {
    getPositives: numbers => numbers.filter(n => n > 0),
    getNegatives: numbers => numbers.filter(n => n < 0),

    getSum: numbers =>
        numbers.reduce((sum, number) => sum + number, 0),

    getAverage: numbers => analitics.getSum(numbers) / numbers.length,

    areAllPositive: numbers => numbers.every(n => n > 0),

    getAllDivisible: (divisor, numbers) => numbers.filter(n => n % divisor === 0)
};


const nNoun = (form1, form2, form3) => {
    return (n) => {

        let absN = Math.abs(n);

        // 123456
        let lastDigt = absN % 10; // 6
        let secondToLastDigits = Math.trunc(absN / 10) % 10; // 12345 % 10 = 5 

        let word;
        if (secondToLastDigits === 1) {
            word = form3;
        } else {
            if (lastDigt === 1) {
                word = form1;
            } else if (2 <= lastDigt && lastDigt <= 4) {
                word = form2;
            } else {
                word = form3;
            }
        }

        return n + " " + word;
    }
}

// const nApples = nNoun("яблоко", "яблока", "яблок");

const log = {
    boxState: box => {
        console.log("В ящике " + box.getQuantityString(box.amount));

        if (box.amount > 0) {
            console.log("Полная коробка");
        } else if (box.amount === 0) {
            console.log("Пустая коробка");
        } else { // box < 0
            console.log("Кредитная коробка");
        }
    },

    transaction: (box, amount) => {

        console.log("----------");
        if (amount >= 0) {
            console.log("Получили " + box.getQuantityString(amount));
        } else {
            console.log("Потеряли " + box.getQuantityString(Math.abs(amount)));
        }
    },

    result: (box, goal) => {

        console.log("----------");
        if (box.amount >= goal) {
            console.log("Ура мы накопили " + box.getQuantityString(box.amount) + "!");
        } else {
            console.log("Не повезло, не фартануло. Мы накопили только " + box.getQuantityString(box.amount) + " =(");
        }
    },

    statistics: transactions => {
        let gains = analitics.getPositives(transactions);
        let loses = analitics.getNegatives(transactions);

        console.log("Суммарный доход: " + analitics.getSum(gains));
        console.log("Суммарный расход: " + analitics.getSum(loses));

        console.log("Средний доход: " + analitics.getAverage(gains));
        console.log("Средний расход: " + analitics.getAverage(loses));

        if (analitics.areAllPositive(transactions)) {
            console.log("Все транзакции были положительными!");
        }

        console.log(transactions.map(transaction => transaction >= 0 ? "Доход" : "Расход"));

        console.log("Круглые транзакции", analitics.getAllDivisible(5, transactions));
    },
}

class Box {
    amount;

    constructor(forms, amount = 0) {
        this.amount = amount;
        this.getQuantityString = nNoun(...forms);
    }

    changeAmount(transaction) {
        this.amount += transaction;
    }

}



// ---- 
let amounts = createRandomArray(-10, 20)(30);

let goal = 100;

let box = new Box(["яблоко", "яблока", "яблок"]);


console.log(box);
log.boxState(box);

let transactions = [];

while (box.amount < goal && amounts.length > 0) {
    let amount = amounts.shift();
    box.changeAmount(amount);

    transactions.push(amount);

    log.transaction(box, amount);
    log.boxState(box);
}

log.result(box, goal);
log.statistics(transactions);
//////////