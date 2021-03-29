class Rectangle {

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    print() {
        console.log("Прямоугольник: " + this.width + ", " + this.height);
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
    constructor(radius = 0) {
        this.radius = radius;
    }

    print() {
        console.log("Круг: " + this.radius)
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

    get area() {
        const p = (this.a + this.b + this.c) / 2;
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
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

];


shapes.forEach(shape => shape.print());

console.log("Площади:", shapes.map(shape => shape.area));