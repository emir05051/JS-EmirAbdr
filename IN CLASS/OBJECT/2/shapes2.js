// Конструктор - функция которая создает новый экземпляр объекта
// свойства - данные которые привязаны к к конкретному объекту
// методы - функции которые привязаны к к конкретному объекту 
// и имеют доступ к его содержимому (свойствам и методам)
// "Статические" методы/свойства - не привязанные к конкретному объекту, но к протипу в целом
// Цепоочку прототипов - c -> C -> B -> A -> (Object);




// Rectangle.prototype.$type = "rectangle";

// Прямоугольник 
// у него есть: высота, ширина и периметр
// он умеет: ?? выводить себя в консоль. вычислять свой периметр

class Shape {

  get perimeter() {
    return 0;
  };

  log() {
    console.log("Фигура ??");
  }

  static comaparePerimeters(shape1, shape2) {
    return shape1.perimeter - shape2.perimeter;
  }
}

class Point extends Shape {

}

class Polygon extends Shape {
  sides = [];

  constructor(...sides) {
    super();
    this.sides = sides.slice();
  }

  get perimeter() {
    return this.sides.reduce((sum, side) => sum + side, 0);
  };

  getSidesString() {
    return this.sides.join(", ");
  }

  log(shapeName = "Многоугольник") {
    console.log(shapeName + ": " + this.getSidesString());
  };
}


class Rectangle extends Polygon {

  constructor(width, height) {
    super(width, height, width, height);
  }

  log() {
    super.log("Прямоугольник");
  };

  test = () => {
    console.log(this.width + this.height);
  }

  
  // Советую не использовать (private)
  // #name;
  _name;

  get name() {
    return this._name;
  }

  set name(value) {
    if (value && typeof value === "string") {
      this._name = value;
    }
  }
  
}


// C# class Square : Rectangle {
//  Square() : base() {

//  }
//}

class Square extends Rectangle { //== Object.setPrototypeOf(Square.prototype, Rectangle.prototype);
  constructor(width) {
    super(width, width);
  }

  log() {
    console.log("Квадрат: " + this.getSidesString());
  }
}

// Square -> Rectangle -> (Object);

class Circle extends Shape  {
  radius = 0;

  constructor(radius) {
    super();
    this.radius = radius;  
  }
  
  get perimeter() {
    return 2 * Math.PI * this.radius;
  };
  
  log() {
    console.log("Круг: " + this.radius)
  };

}

class Triangle extends Polygon {

  constructor(a = 0, b = 0, c = 0) {
    super(a, b, c);
  }

  log() {
    super.log("Треугольник");
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
  new Point()
];



console.log(shapes);

shapes.forEach(shape => shape.log());

console.log(shapes.map(shape => shape.perimeter));


const rectangle = shapes[0];

// rectangle.log = () => console.log("Спец прямоугольник");
// console.log(rectangle);
// rectangle.log();

// Object.setPrototypeOf(Square.prototype, null);


rectangle.name = "Спец прямоугольник";
// console.log(rectangle.getName());
console.log(rectangle);
console.log(rectangle.name);
// console.log(rectangle.#name);



const sortedShapes = shapes.slice();//filter(shape => shape instanceof Rectangle);
// rectangles.forEach(shape => shape.test());

sortedShapes.sort(Shape.comaparePerimeters);
console.log(sortedShapes);
