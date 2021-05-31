console.log("asdf");

class Controller {
  
  model;
  view;

  includeArchive = false;
  includeActive = true;

  editedItemId = null;

  constructor (model, view) {
    this.model = model;
    this.view = view;
    this.view.setController(this);

    this.render();
  }

  render = async () =>  {
    const list = await this.model.list({
      includeArchive: this.includeArchive,
      includeActive: this.includeActive
    });
    this.view.render(list);
  }
  toggleIncludeArchive() {
    this.includeArchive = !this.includeArchive;
    this.render();
  }
  toggleIncludeActive() {
    this.includeActive = !this.includeActive;
    this.render();
  }

  
  enterEditMode(id) {
    this.editedItemId = id;
    this.render();
  }

  toggle = async item => {
    await this.model.toggle(item);
    this.render();
  }

  delete = async item => {
    await this.model.delete(item);
    this.render();
  }
  add = async (title, description) => {
    if (!title) {// валидация
      return;
    }
    await this.model.add(title, description);
    this.render();
  }
  update = async (toDoItem, title, description) => {
    if (!title) {// валидация
      return;
    }
    await this.model.update(toDoItem, title, description);
    this.render();
  }

}