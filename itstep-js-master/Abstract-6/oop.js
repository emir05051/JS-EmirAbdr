// Все объект - Java, C#
// Инкапсуляция, Наследование, Полиморфизм, (Абстракция)
// interface, abstract class

// Переменные как переменные
// Функции - методы (привязанные к экземпляру или статические)
// Объекты - ка объекты (с состоянием) иногда как Модули - набор функционала (префикс), 

// username - обязательное, не меньше 5 символов
// passwrods - обязательное, не меньше 8 символов, (содержит символ !) (содержит большую букву и цифру)
// age - число, целое, (0, 150)

// Алан Кей - Smaltalk
// микросервисы - Netflix 



class BaseForm {
  _fields = {};

  constructor(fields) {
    this._fields = fields;
  }

  getField(key) {
    return this._fields[key];
  }

  get keys() {
    return Object.keys(this._fields);
  }
}

class BaseValidation {
  
  _form = null;
  _isValid = true;
  _errors = {};
  _cleanData = {};

  // form: BaseForm
  constructor(form) {
    this._form = form;
  }

  validate() {
    
    this._form.keys
      .forEach(key => {
        const validatorName = "_validate" + key[0].toUpperCase() + key.slice(1);

        if (validatorName in this) {
          this[validatorName]();
        } else {
          this._cleanData[key] = this._form.getField(value);
        }

      });
  }

  get isValid() {
    return this._isValid;
  } 

  get isValidField() {
    return !!this._errors[key];
  }

  get cleanData() {
    return this._cleanData;
  }

  getCleanField(key) {
    return this._cleanData[key];
  }

  get errors() {
    return this._errors;
  }

  getError(key) {
    return this._errors[key];
  }
}

class UserForm extends BaseForm {

  get username() {
    return this._fields["username"];
  }

  get password() {
    return this._fields["password"];
  }
  
  get age() {
    return this._fields["age"];
  }

}

class UserFormValidation extends BaseValidation {

  // validate() {
  //   this._validateUsername();
  //   this._validatePassword();
  //   this._validateAge();
  // }

  _validateUsername() {
    
    const username = this._form.getField("username");

    if (username.length < 5) {
      this._errors["username"] =  "Логин должен быть не меньше 5 символов";
      this._isValid = false;
    } else {
      this._cleanData["username"] = username;
    }

  }
  
  _validatePassword() {
    
    const password = this._form.getField("password");

    if (password.length < 8) {
      this._errors["password"] = "Пароль должен быть не меньше 8 символов";
      this._isValid = false;
    } else if (password.indexOf("!") < 0) {
      this._errors["password"] = "Пароль должен содержать '!'";
      this._isValid = false;
    } else {
      this._cleanData["password"] = password;
    }

  }

  _validateAge() {
    const age = this._form.getField("age");

    let ageNumber = parseInt(age);

    if (isNaN(ageNumber) || age !== String(ageNumber)) {
      this._errors["age"] = "Возраст должен быть числом";
      this._isValid = false;
    } else if (age < 0 || age > 150) {
      this._errors["age"] = "Возраст должен быть в промежутке от 0 до 150 лет";
      this._isValid = false;
    } else {
      this._cleanData["age"] = ageNumber;
    }

  }

}

class User {
  username;
  password;
  age;
  dateOfRegistration;

  constructor(data) {
    this.username = data.username;
    this.password = data.password;
    this.age = data.age;
    this.dateOfRegistration = new Date();
  }

}

let validForm = new UserForm({
  username: "anton",
  password: "anton!anton",
  age: "20",
});

const validFormValidation = new UserFormValidation(validForm);

let invalidForm = new UserForm({
  username: "anto",
  password: "anto",
  age: "20a",
});

const invalidFormValidation = new UserFormValidation(invalidForm);


// form: UserForm
const handleSubmit = (validation) => {
  validation.validate();

  if (validation.isValid) {
    // отправить форму 
    const user = new User(validation.cleanData);
    console.log("Создаем пользователя", user);
  } else {
    // отображаем ошибки в форме
    console.log("Форма заполнена с ошибками", validation.errors, validation._form);
  }
}

handleSubmit(validFormValidation);
console.log("--------")
handleSubmit(invalidFormValidation);