// Функциональное программирование
// Функтор (map), Монада (flatMap)

// console.log(
//   [1,2,3]
//     .map(id => getPerson(id)) // fmap
//     // .flatMap(person => getPets(person))
//     .flatMap(x => [x, x * 2, x * 3]) // bind, chain, SelectMany
//     // .flat()
// );

// Array.of(1,2,3); // return 


// Maybe // Option
// Either // Left or Right

const doo = (routine) => { // do notation
  const steps = routine();

  const step = (v) => {
    let result = steps.next(v);
    if (result.done) {
      return result.value; 
    }

    return result.value.flatMap(step); 
  }

  return step();

}

class Maybe { // Возможно

}

class Just extends Maybe { // Просто (5)
  value

  constructor(value) {
    super();
    this.value = value;
  }

  static of(value) {
    return new Just(value);
  }
  
  match (_, f) {
    return f(this.value);
  }

  map (f) {
    return Just.of(f(this.value));
  }

  flatMap (f) {
    return f(this.value);
  }
  

}

class Nothing extends Maybe { // Ничего

  static of() {
    return new Nothing();
  }

  match (f, _) {
    return f();
  }

  map (f) {
    return this;
  }

  flatMap (f) {
    return this;
  }
}


class Either { // Одно из двух
}

class Right extends Either { // Просто (5)
  value

  constructor(value) {
    super();
    this.value = value;
  }

  static of(value) {
    return new Right(value);
  }
  
  match (_, f) {
    return f(this.value);
  }

  map (f) {
    return Right.of(f(this.value));
  }

  flatMap (f) {
    return f(this.value);
  }
  

}

class Left extends Either { // Ничего

  value 
  
  constructor(value) {
    super();
    this.value = value;
  }

  static of(value) {
    return new Left(value);
  }

  match (f, _) {
    return f(this.value);
  }

  map (f) {
    return this;
  }

  flatMap (f) {
    return this;
  }
}



const greet = greeting => name => {
  if (!greeting) {
    return Left.of("Необходимо приветствие");
  }
  if (!name) {
    return Left.of("Необходимо имя");
  }

  return Right.of(greeting + ", " + name + "!");
}

const computation = n => 
  greet("Привет")  (n)
    .map(v => v.padStart(50, "-"))
    .map(v => "(" + v + ")")
    .flatMap(greet("Anton"))
    .flatMap(greet("Пока"));


// var a = from a in getA() 
//         from b in getB()
//         select a + b;


// computation("Anton")
//   .match(
//     e => console.log("Не получилось ((", e),
//     v => console.log(v)
//   );


// Генераторы


const getA = () => [1, 2, 3];
const getB = () => [3, 4, 5];

const computation2 = () => 
  getA()
    .flatMap(a => getB().map(b => a + b));
    
const computation3 = function* () {
  const a = yield getA();
  const b = yield getB();

  return Right.of([...a, ...b]);
}

console.log(doo(computation3));

// Promise.resolve(10).then(a => Promise.resolve(20).then(b => a + b))

// const a = await Promise.resolve(10);
// const b = await Promise.resolve(20);
// return a + b;


// computation2()
//   .match(
//     e => console.log("Не получилось ((", e),
//     v => console.log(v)
//   );


const gen = function* () {
  n = 0;
  let a = 0;
  while (true) {
    n = n + a;
    a = yield n;
  }
  // yield 1; //Произвести
  // yield 20;
  // yield 123;
  // yield "asdf";
  // yield 10;
}

const it = gen();

// console.log(Array.from(it));

// while (true) {
//   const result = it.next(10);
//   if (result.value >= 20) {
//     // console.log(result.value);
//     break;
//   }
//   console.log(result.value);
// }





