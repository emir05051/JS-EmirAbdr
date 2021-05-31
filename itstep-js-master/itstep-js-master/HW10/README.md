1. Добавить всем фигурам метод area (площадь) для вычисления площади
  Прямоугольник: width * height
  Круг: pi * r * r
  Треугольник: sqrt(p * (p - a) * (p - b) * (p - c)) // p - половина периметра!!



2. В продолжение яблок
2.1 Конструктор объекта box (ящик): 
  amount 
  changeAmount (transaction) => ??

class Box {
  amount = 0;


  changeAmount(transaction) {
    this.amount += transaction;
  }
}

---

const box = new Box();


box.changeAmount(transaction)

box.amount