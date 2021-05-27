// Аналог прототипа в других ООП языках class
// interface

class Shape {

  static TYPE_NAME = "Неизвестная форма"

  // tmp = 10;
  // arrow = () => console.log(this.tmp);

  // area () {
  //   return 0;
  // }

  // toString () {
  //   return this.constructor.TYPE_NAME + " [" + Object.values(this).join(", ") + "]";
  // }
}

class Circle extends Shape {
  
  static TYPE_NAME = "Circle"
  
  r

  constructor (r) {
    super();
    this.r = r;
  }

  area () {
    return Math.PI * this.r * this.r;
  }
}

class Rectangle extends Shape {

  static TYPE_NAME = "Rectangle"

  constructor (w, h) {
    super();
    this.w = w;
    this.h = h;
  }

  area () {
    return this.w * this.h;
  }
}

const unknown = new Shape();

const circle1 = new Circle(10);
const circle2 = new Circle(20);

const rect1 = new Rectangle(10, 20);
const rect2 = new Rectangle(20, 40);

const shapes = [unknown, circle1, circle2, rect1, rect2];

// console.log(circle1.arrow());
console.log(shapes);

shapes.forEach(shape => console.log("" + shape, shape.area()));

console.log("Общая площадь", shapes.reduce((sum, shape) => sum + shape.area(), 0));

console.log("Общая площадь только кругов", 
  shapes.reduce((sum, shape) => {
    if (shape instanceof Circle) {
      return sum + shape.area()
    } else {
      return sum;
    }
  }, 0)
);


Shape.prototype.toString = () => "Все сломалось";

shapes.forEach(shape => console.log("" + shape, shape.area()));


console.log(circle1.area.apply(rect1));

// const o = {
//   x: 10,

//   f1: y => this.x + y,

//   f2: function (y) {
//     return this.x + y;
//   }
// }

// console.log(o);
// console.log(o.f1(5));
// console.log(o.f2(5));
