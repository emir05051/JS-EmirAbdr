const logRectangle = rectangle => 
  console.log("Прямоугольник: " + rectangle.width + ", " + rectangle.height);

const logSquare = square => 
  console.log("Квадрат: " + square.width);

const logCircle = circle => 
  console.log("Круг: " + circle.radius)

const logTriangle = triangle => 
  console.log("Треугольник: " + triangle.a + ", " + triangle.b + ", " + triangle.c);



function Rectangle(width, height) {
  this.width = width;
  this.height = height;
};

Rectangle.prototype.$type = "rectangle";

Rectangle.prototype.perimeter = function() {
  return (this.width + this.height) * 2;
};

Rectangle.prototype.log = function() {
  logRectangle(this);
};


// "Статические функции" static
Rectangle.comaparePerimeters = (rect1, rect2) => 
  rect1.perimeter() - rect2.perimeter();


function Square(width) {
  this.width = width;
  this.height = width;
}

Square.prototype.$type = "square";

Square.prototype.log = function() {
  logSquare(this);
};

// "Наследование"
Object.setPrototypeOf(Square.prototype, Rectangle.prototype);

// Square -> Rectangle -> (Object);



// Доступность свойств/методов
// в ООП: private, public, (protected)
function Circle(name, radius) {
  // this.name = name;
  this.radius = radius;  

  this.log = function() {
    console.log("Круг " + name + ": " + this.radius)
  }

  this.getName = function() {
    return name;
  }

  this.setName = function(newName) {
    if (newName && typeof newName === "string") {
      name = newName;
    }
  }
};

Circle.prototype.$type = "circle";

Circle.prototype.perimeter = function() {
  return 2 * Math.PI * this.radius;
};

Circle.prototype.log = function() {
  logCircle(this);
};

Circle.comaparePerimeters = (circle1, circle2) => 
  circle1.perimeter() - circle2.perimeter();



function Triangle(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
};

Triangle.prototype.$type = "triangle";

Triangle.prototype.perimeter = function() {
  return this.a + this.b + this.c;
}

Triangle.prototype.log = function() {
  logTriangle(this);
}


const shapes = [
  new Rectangle(100, 50),
  new Rectangle(150, 20), 
  new Square(100),
  new Square(150), 
  new Circle("Первый", 100), 
  new Circle("Красный", 200), 
  new Triangle(100, 150, 200), 
  new Triangle(300, 400, 500)
];
console.log(shapes);

console.log("--------");

shapes.forEach(shape => {

  if (shape instanceof Square) {
    logSquare(shape);
  } else if (shape instanceof Rectangle) {
    logRectangle(shape);
  } else if (shape instanceof Circle) {
    logCircle(shape);
  } else if (shape instanceof Triangle) {
    logTriangle(shape);
  } else {
    console.log("Неизвестная фигура");
  }
});

console.log("--------");

const circle = shapes[4];
console.log(circle.getName());
circle.setName("Последний");
circle.setName(123);
console.log(circle.getName());

shapes.forEach(shape => shape.log());

console.log(shapes.map(shape => shape.perimeter()));

console.log(shapes[0].log === shapes[1].log);


const rectangle = shapes[0];

rectangle.width = 300;

rectangle.log();
console.log(rectangle, rectangle.perimeter());


rectangle.name = "Специальный прямоугольник";
rectangle.price = 1000;

console.log(rectangle);

Rectangle.prototype.log = function () {
  console.log(this.name + ": " + this.width + ", " + this.height);
}

console.log(rectangle);

rectangle.log();
rectangle.comaparePerimeters();

console.log("-----")
shapes.forEach(shape => shape.log());


const getDiagonalOfRectangle = rectangle => {
  if (rectangle instanceof Rectangle) {
    return Math.sqrt(rectangle.width * rectangle.width + rectangle.height * rectangle.height);
  }

  console.log("Не прямоугольник!");
  return null;
}


console.log(getDiagonalOfRectangle(shapes[0]));
console.log(getDiagonalOfRectangle(shapes[1]));
console.log(getDiagonalOfRectangle(shapes[2]));
console.log(getDiagonalOfRectangle(shapes[3]));



const rectangles = shapes.filter(shape => shape instanceof Rectangle);
console.log(rectangles);

rectangles.sort(Rectangle.comaparePerimeters);
console.log(rectangles);
