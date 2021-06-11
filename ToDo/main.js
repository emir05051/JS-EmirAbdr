window.addEventListener("load", async () => {

  // const db = await IndexedDBStore.open();
  // await db.seed(mockToDoList);

  const memory = Memory.open();
  memory.seed(mockToDoList);

  const model = new ToDoList(memory);
  const view = new View();
  const controller = new Controller(model, view);
});

