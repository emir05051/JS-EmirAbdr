class IndexedDBStore {
  static DB_NAME = "todo";
  static VERSION = 1;

  /**
   * @type {IDBDatabase}
   */
  db;

  constructor(db) {
      this.db = db;
  }

  static open() {
      return new Promise((resolve, reject) => {

          const request = window.indexedDB.open(IndexedDBStore.DB_NAME, IndexedDBStore.VERSION);

          request.addEventListener("error", (e) => {
              console.log(request, e);
              reject(e);
          });
      
          request.addEventListener("success", (e) => {
              const db = request.result;
          
              db.addEventListener("error", e => {
              console.log("IndexedDBStore", "Error", e);
              });
      
              resolve(new IndexedDBStore(db));
          });

          request.addEventListener("upgradeneeded", IndexedDBStore.upgrade);
      });
  }
  


  /**
   * @param {IDBVersionChangeEvent} e 
   */
  static upgrade(e) {
      console.log("IndexedDBStore", `Upgrade from ${e.oldVersion} to ${e.newVersion}`);

      // e.target.transaction.abort();
      
      const db = e.target.result;
  
      switch (e.oldVersion) {
          case 0: {
              const store = db.createObjectStore("todo", {
                  autoIncrement: true
              });
          }
      }
  }

  clear() {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction("todo", "readwrite");

      transaction.addEventListener("complete", e => {
        console.log("DbContext", "Очистили", e);
        resolve();
      });

      transaction.addEventListener("error", e => {
        reject(e);
      });
  
      const store = transaction.objectStore("todo");

      store.clear();
    });
  }
  
  seed(mockToDoList) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction("todo", "readwrite");

      transaction.addEventListener("complete", e => {
        console.log("IndexedDBStore", "Cохранили", e);
        resolve();
      });

      transaction.addEventListener("error", e => {
        reject(e);
      });
  
      const store = transaction.objectStore("todo");

      store.count().onsuccess = e => {
        if (e.target.result > 0) {
          return;
        }

        mockToDoList(50).forEach(item => {
          store.add(item);
        });
      }

    });
  }

  //махинации над toDoItem
  insert(toDoItem) {
      return new Promise((resolve, reject) => {
          const transaction = this.db.transaction("todo", "readwrite");
          transaction.addEventListener("complete", e => {
              console.log("IndexedDBStore", "Cохранили", e);
              resolve(toDoItem);
          });
          transaction.addEventListener("error", e => {
              reject(e);
          });
          const store = transaction.objectStore("todo");
          store.add(toDoItem).onsuccess = e => {
              toDoItem.setId(e.target.result);
              console.log([toDoItem]);
          };
      });
  }
  update(toDoItem) {
      return new Promise((resolve, reject) => {
          const transaction = this.db.transaction("todo", "readwrite");
          transaction.addEventListener("complete", e => {
              console.log("IndexedDBStore", "Cохранили", e);
              resolve(toDoItem);
          });
          transaction.addEventListener("error", e => {
              reject(e);
          });
          const store = transaction.objectStore("todo");
          store.put(toDoItem, toDoItem.id);
      });
  }
  delete(toDoItem) {
      return new Promise((resolve, reject) => {
          const transaction = this.db.transaction("todo", "readwrite");
          transaction.addEventListener("complete", e => {
              console.log("IndexedDBStore", "Cохранили", e);
              resolve();
          });
          transaction.addEventListener("error", e => {
              reject(e);
          });
          const store = transaction.objectStore("todo");
          store.delete(toDoItem.id);
      });
  }
  getList() {
      return new Promise((resolve, reject) => {

          const result = [];

          const transaction = this.db.transaction("todo", "readwrite");
          transaction.addEventListener("complete", e => {
              console.log("IndexedDBStore", "Cохранили", e);
              resolve(result);
          });
          transaction.addEventListener("error", e => {
              reject(e);
          });
          const store = transaction.objectStore("todo");
          store.openCursor().onsuccess = e => {
              var cursor = e.target.result;
              if (cursor) {
              //   console.log(cursor);
                cursor.value.id = cursor.key;
                
                result.push(ToDoItem.fromDb(cursor.value));

                cursor.continue();
              }
          }
      });
  }
}

