class ToDoItem {
    id;
    title;
    description;
    isDone;
    createdAt;
    doneAt;
    //constructor'ы (Создавать пункты (Описание, выставляем дату создания))
    constructor(id, title, description, isDone, createdAt, doneAt) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.isDone = isDone;
        this.createdAt = createdAt;
        this.doneAt = doneAt;
    }
    static from(title, description, createdAt) { // налету
        return new ToDoItem(null, title, description, false, createdAt, null);
    }
    static fromDb ( { id, title, description, isDone, createdAt, doneAt } ) { // из базы
        return new ToDoItem(id, title, description, isDone, createdAt, doneAt);
    }
    // как ни странно set id (установка id)
    setId(id) {
        this.id = id;
    }
    //- Отмечать выполненость (Отмечаем флажок, Выставляем дату)
    //- Отменять отметку выполненности (Убираем флажок, отчищаем дату)
    markIsDone(doneAt) {
        this.isDone = true;
        this.doneAt = doneAt;
    }
    markUndone() {
        this.isDone = false;
        this.doneAt = null;
    }
    //Изменять пункты (только описание)
    update(title, description) {
        this.title = title;
        this.description = description;
    }
}

// interface ToDoStore {
//   insert(ToDoItem) => ToDoItem;
//   update(ToDoItem) => ToDoItem;
//   delete(ToDoItem) => void;
//   getList() => ToDoItem[];
// }


class ToDoList {
  store;

  constructor(store) {
    this.store = store;
  }

  async list() {
    return await this.store.getList();
  }

  async toggle(toDoItem) {
    toDoItem.isDone ? toDoItem.markUndone() : toDoItem.markIsDone(new Date());
    await this.store.update(toDoItem);
  }

  async delete(toDoItem) {
    await this.store.delete(toDoItem);
  }
}
