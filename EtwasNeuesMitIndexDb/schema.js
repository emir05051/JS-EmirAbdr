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

class ToDoList {
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

            const request = window.indexedDB.open(ToDoList.DB_NAME, ToDoList.VERSION);

            request.addEventListener("error", (e) => {
                console.log(request, e);
                reject(e);
            });
        
            request.addEventListener("success", (e) => {
                const db = request.result;
            
                db.addEventListener("error", e => {
                console.log("ToDoList", "Error", e);
                });
        
                resolve(new ToDoList(db));
            });

            request.addEventListener("upgradeneeded", ToDoList.upgrade);
        });
    }

    /**
     * @param {IDBVersionChangeEvent} e 
     */
    static upgrade(e) {
        console.log("ToDoList", `Upgrade from ${e.oldVersion} to ${e.newVersion}`);

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
    //махинации над toDoItem
    insert(toDoItem) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction("todo", "readwrite");
            transaction.addEventListener("complete", e => {
                console.log("ToDoList", "Cохранили", e);
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
                console.log("ToDoList", "Cохранили", e);
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
                console.log("ToDoList", "Cохранили", e);
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
                console.log("ToDoList", "Cохранили", e);
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