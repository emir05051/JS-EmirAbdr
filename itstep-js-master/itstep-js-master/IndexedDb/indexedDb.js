console.log(window.indexedDB);

const request = window.indexedDB.open("books", 5);

/**
 * @type {IDBDatabase}
 */
let db = null;

request.addEventListener("error", (e) => {
  console.log(request, e);
});

request.addEventListener("success", (e) => {
  db = request.result;

  db.addEventListener("error", e => {
    console.log("Error", e);
  });

  const transaction = db.transaction("books", "readwrite");

  transaction.addEventListener("complete", e => {
    console.log("Cохранили", e);
    
    f();
  });

  const store = transaction.objectStore("books");

  store.put({
    id: 1,
    title: "ASDfasdf",
    author: "asdfsadf",
    date: new Date(),
    tags: ["asdf", "zcxv", "123"]
  });

  store.put({
    id: 2,
    title: "ASDfa123412sdf",
    date: new Date(),
    tags: ["asdf", "asdf", "zcxv", "123"],
    isbn: "0001-234-234"
  });

  store.put({
    id: 3,
    title: "ASsadfsadfDfa123412sdf",
    author: "as sdaf asdfsadf",
    date: new Date(),
    tags: ["asdfasdf", "asdf", "zcxv", "123"],
    isbn: "0001-234-234sadf"
  });

  console.log(db, e);

});

request.addEventListener("upgradeneeded", (e) => {
  console.log(request, e);
  
  const db = request.result;

  switch (e.oldVersion) {
    case 0: 
    case 1: 
    case 2:
    case 3: {
      const store = db.createObjectStore("books", {
        keyPath: "id"
      });
    }

    case 4: {
      const store = e.target.transaction.objectStore("books");
      store.createIndex("author", "author");
    }

  }

 


  // request.transaction.abort();
});



const printResult = e => {
  console.log(e.target.result);
};

const printResult2 = e => {
  console.log(e.target.result, e);
};


const f = () => {
  
  const transaction = db.transaction("books", "readonly");

  transaction.addEventListener("complete", e => {
    console.log("OK");
  });

  const store = transaction.objectStore("books");

  // store.count().onsuccess = printResult;
  
  const keyRange = IDBKeyRange.bound(2, 3, false, false);  
  store.getAll(keyRange).onsuccess = printResult;

  // store.get(keyRange).onsuccess = printResult2;
  // store.getKey(keyRange).onsuccess = printResult2;


  // const request = store.openCursor();


  // let countWithAuthor = 0;
  // request.onsuccess = e => {
  //   var cursor = e.target.result;
  //   if (cursor) {
  //     if (cursor.value.author) {
  //       countWithAuthor++;
  //     }
  //     console.log(cursor.value);
  //     // cursor.value contains the current record being iterated through
  //     // this is where you'd do something with the result
  //     cursor.continue();
  //   } else {
  //     console.log(countWithAuthor);
  //     // no more results
  //   }
  // }

  const authorRange = IDBKeyRange.lowerBound("asa", true);

  // lowerBound key >= X
  // upperBound key < X
  // bound X < key < Y

  const index = store.index("author");
  index.getAll(authorRange).onsuccess = printResult;
  index.get(authorRange).onsuccess = printResult;

}
