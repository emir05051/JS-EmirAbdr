/*
- Не зависим от формы
- Повторное исопльзовние кода 

- Валидация "на ходу"
  - Две версии (focus или нет)

- Одна ошибка на поле 

- Валидация + трансформация
  1. Трансформация только когда теряем фокус
  2. Прямо по мере ввода
*/

// validator :: (State) -> State


const identity = x => x;

// Sum Type
class State {
  input

  constructor(input) {
    this.input = input;
  }
}

State.from = input => 
  new Success(input, input);


State.switch = f => g => state => {
  switch (state.constructor) {
    case Failure: return f(state);
    case Success: return g(state);
  }
}

State.continue = State.switch (identity);


class Success extends State {
  value

  constructor(input, value) {
    super(input);
    this.value = value;
  }
}

Success.of = value => new Success(null, value);

class Failure extends State {
  error

  constructor(input, error) {
    super(input);
    this.error = error;
  }
}

Failure.of = error => new Failure(null, error);

const validate = validator => input => 
  validator(State.from(input));


const required =  
  State.continue
    (state => state.input.length > 0 
            ? Success.of(state.value) 
            : Failure.of("Обязательное поле"));


//   if (!state.isValid) {
//     return state;
//   }

//   return state.result.length > 0 ? state : withError(state, "Обязательное поле");
// }



// const withError = (state, error) => ({
//   value: state.value,
//   result: state.result,
//   isValid: false,
//   error
// })
