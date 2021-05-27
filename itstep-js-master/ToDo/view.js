
class View {

  controller;

  setController(controller) {
    this.controller = controller;
  }

  // view
  renderItem = item =>  {
    return $("li", { className: "toDoItem" },
        $("input", { checked: item.isDone, type: "checkbox",
            onchange: () => this.controller.toggle(item)
        }),
        $("div", { className: "to-do-item__title" },
            item.title
        ),
        $("div", { className: "to-do-item__description" },
            item.description
        ),
        $("div", { className: "to-do-item__date" },
            item.isDone ? item.doneAt.toLocaleDateString() : item.createdAt.toLocaleDateString()
        ),
        $("button", { className: "to-do-item__delete", type: "button",
            onclick: () => this.controller.delete(item)
        }, "удалить")
    );
  }
  
  renderList = list => {
    return $("ul", { className: "to-do-list", id: "to-do-list" },
        ...list.map(this.renderItem)
    );
  }

  render = list => {
    while (document.body.firstChild) {
      document.body.firstChild.remove();
    }
    
    document.body.append(this.renderList(list));
  }
}