console.log("asdf");

class Controller {
  
  model;
  view;

  constructor (model, view) {
    this.model = model;
    this.view = view;
    this.view.setController(this);

    window.addEventListener("load", this.render);
  }

  render = async () =>  {
    const list = await this.model.list();
    this.view.render(list);
  }

  toggle = async item => {
    await this.model.toggle(item);
    this.render();
  }

  delete = async item => {
    await this.model.delete(item);
    this.render();
  }

}