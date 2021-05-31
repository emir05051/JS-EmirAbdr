// 1. Добавить новую фигуру на основаниии треугольника - Равносторонний треугольник (EquilateralTriangle)
//   // Метод perimeter и area  - остаются от треугольника
//   // Метод log - делем собственный "Равносторонний треугольник: 100"


// 2. Добавить "статический" метод Triangle.areEqual (равны?), для проверки равенства треугльников
//    1. проверить что оба аргумента Triangle
//    2. сравнить все стороны a=a b=b c=c
//    3.* сравнить стороны без учета порядка Triangle(1, 2, 3) === Triangle(3, 2, 1);

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

