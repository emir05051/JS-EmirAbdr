(async () => {

  const db = await IndexedDBStore.open();
  db.seed(mockToDoList);

  const model = new ToDoList(db);
  const view = new View();
  const controller = new Controller(model, view);

})();