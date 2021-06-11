// interface ToDoStore {
//   insert(ToDoItem) => ToDoItem;
//   update(ToDoItem) => ToDoItem;
//   delete(ToDoItem) => void;
//   getList() => ToDoItem[];
// }


class Memory {
  list;

  ID = 0;

  nextId() {
    return ++this.ID;
  }

  constructor() {
    this.list = [];
  }

  static open() {
    return new Memory();
  }

  seed(mockToDoList) {
    this.list = mockToDoList(50).map(item => {
      item.id = this.nextId();
      return item;
    });
  }

  insert(item) {
    item.id = this.nextId();
    this.list.push(item);

    return Promise.resolve(item);
  }

  update(item) {
    const index = this.list.findIndex(it => it.id === item.id);

    if (index >= 0) {
      this.list[index] = item;
    } else {
      this.list.push(item); // Опасно! Только чтоб соответствовать поведению IndexdDbStore;
      if (item.id > this.ID) {
        this.ID = item.id;
      }
    }

    return Promise.resolve(item);
  }

  delete(item) {
    const index = this.list.findIndex(it => it.id === item.id);
    
    if (index >= 0) {
      this.list.splice(index, 1);
    }

    return Promise.resolve();
  }

  getList() {
    return Promise.resolve(this.list.slice());
  }

}
