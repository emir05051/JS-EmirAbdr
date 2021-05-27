class Contact {
  name;
  phone;
  email;

  get firstname () {
    return this.name.split(" ")[0];
  }

  constructor(name, phone, email) {
    this.name = name;
    this.phone = phone;
    this.email = email;
  }

  static from(data) {
    return new Contact(
      data.name,
      data.phone,
      data.email
    );
  }
}

class DbContext {

  static DB_NAME = "contacts";
  static VERSION = 2;

  /**
   * @type {IDBDatabase}
   */
  db;

  constructor(db) {
    this.db = db;
  }

  static open() {
    return new Promise((resolve, reject) => {

      const request = window.indexedDB.open(DbContext.DB_NAME, DbContext.VERSION);
        
      request.addEventListener("error", (e) => {
        console.log(request, e);
        reject(e);
      });
  
      request.addEventListener("success", (e) => {
        const db = request.result;
      
        db.addEventListener("error", e => {
          console.log("DbContext", "Error", e);
        });
  
        resolve(new DbContext(db));
      });

      request.addEventListener("upgradeneeded", DbContext.upgrade);
    });
  }

  /**
   * @param {IDBVersionChangeEvent} e 
   */
  static upgrade(e) {
    console.log("DbContext", `Upgrade from ${e.oldVersion} to ${e.newVersion}`);

    // e.target.transaction.abort();
    
    const db = e.target.result;
  
    switch (e.oldVersion) {
      case 0:
      case 1: {
        const store = db.createObjectStore("contacts", {
          autoIncrement: true
        });
      }
    }
  }

  clear() {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction("contacts", "readwrite");

      transaction.addEventListener("complete", e => {
        console.log("DbContext", "Очистили", e);
        resolve();
      });

      transaction.addEventListener("error", e => {
        reject(e);
      });
  
      const store = transaction.objectStore("contacts");

      store.clear();
    });
  }

  seed(mockContacts) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction("contacts", "readwrite");

      transaction.addEventListener("complete", e => {
        console.log("DbContext", "Cохранили", e);
        resolve();
      });

      transaction.addEventListener("error", e => {
        reject(e);
      });
  
      const store = transaction.objectStore("contacts");

      store.count().onsuccess = e => {
        if (e.target.result > 0) {
          return;
        }

        mockContacts(1000).forEach(contact => {
          store.add(contact);
        });
      }

    });
  }

  findContacts(predicate) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction("contacts", "readonly");

      const result = [];

      transaction.addEventListener("complete", e => {
        console.log("DbContext", "Нашли", e);
        resolve(result);
      });

      transaction.addEventListener("error", e => {
        reject(e);
      });
  
      const store = transaction.objectStore("contacts");

      store.openCursor().onsuccess = e => {
        var cursor = e.target.result;
        if (cursor) {
          const value = Contact.from(cursor.value);

          predicate(value) && (result.push(value));

          cursor.continue();
        } 
      }

    });
  }


  listRandom(n) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction("contacts", "readonly");

      const result = [];

      transaction.addEventListener("complete", e => {
        console.log("DbContext", "Нашли", result, e);
        resolve(result);
      });

      transaction.addEventListener("error", e => {
        reject(e);
      });
  
      const store = transaction.objectStore("contacts");
      
      // Достать N случайных контактов
      store.getAllKeys().onsuccess = e => {
        const ids = e.target.result;

        Array.from({ length: n })
          .map(() => {
            const index = randomInt(0, ids.length - 1);
            const [id] = ids.splice(index, 1);
            return id;
          })
          .forEach(id => {
            store.get(id).onsuccess = e => {
              result.push(e.target.result);
            }
          });
      };



    });
  }

  
}
