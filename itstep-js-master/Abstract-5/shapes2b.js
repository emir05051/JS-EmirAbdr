

class Rectangle {

  _width = 0;
  _height = 0;

  _perimeter = 0;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this._recalculatePerimeter();
  }

  get width() {
    return this._width;
  }

  set width(value) {
    this._width = value;
    this._recalculatePerimeter();
  }

  get height() {
    return this._height;
  }

  set height(value) {
    this._height = value;
    this._recalculatePerimeter();
  }

  _recalculatePerimeter() {
    this._perimeter = (this._width + this._height) * 2;
  }

  get perimeter() {
    return this._perimeter;
  };

  log() {
    console.log("Прямоугольник: " + this.width + ", " + this.height)
  };

  static comaparePerimeters(rect1, rect2) {
    return rect1.perimeter - rect2.perimeter;
  }
}


const rectangle = new Rectangle(100, 200);
console.log(rectangle);

console.log(rectangle.perimeter);
for (let i = 0; i < 1000; i++) {
  const tmp = rectangle.perimeter * 2;
}

for (let i = 0; i < 1000; i++) {
  rectangle.width = 100;
}

rectangle.width = 400;
console.log(rectangle);

console.log(rectangle.perimeter);
