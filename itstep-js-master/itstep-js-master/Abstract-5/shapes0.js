const logRectangle = rectangle => 
  console.log("Прямоугольник: " + rectangle.width + ", " + rectangle.height);

const logCircle = circle => 
  console.log("Круг: " + circle.radius)

const logTriangle = triangle => 
  console.log("Треугольник: " + triangle.a + ", " + triangle.b + ", " + triangle.c);




const constructRectangle = (width, height) => ({
  $type: "rectangle",
  width,
  height,
  perimeter: function() {
    return (this.width + this.height) * 2;
  },
  log: function() {
    logRectangle(this);
  }
});


const constructCircle = (radius) => ({
  $type: "circle",
  radius,
  perimeter: function() {
    return 2 * Math.PI * this.radius;
  },
  log: function() {
    logCircle(this);
  },
});


const constructTriangle = (a, b, c) => ({
  $type: "triangle",
  a,
  b,
  c,
  perimeter: function() {
    return this.a + this.b + this.c;
  },
  log: function() {
    logTriangle(this);
  },
});


const shapes = [
  constructRectangle(100, 50),
  constructRectangle(150, 20), 
  constructCircle(100), 
  constructCircle(200), 
  constructTriangle(100, 150, 200), 
  constructTriangle(300, 400, 500)
];
console.log(shapes);


shapes.forEach(shape => {
  switch (shape.$type) {
    case "rectangle": logRectangle(shape); break;
    case "circle": logCircle(shape); break;
    case "triangle": logTriangle(shape); break;
    default: console.log("Неизвестная фигура");
  }
});
