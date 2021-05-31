
class View {

  controller;

  setController(controller) {
    this.controller = controller;
  }

  // view
  renderEditForm = item => {
    return $("form", { className: "add-form",
        onsubmit: (e) => {
          e.preventDefault();
          const form = e.target;
          const title = form.elements["title"].value;
          const description = form.elements["description"].value;
          this.controller.update(item, title, description);
        }
      }, 
      $("label", {}, 
        "Название",
        $("input", { type: "text", name: "title", value: item.title }),
      ),
      $("label", {}, 
        "Описание",
        $("textarea", { name: "description", value: item.description }),
      ),
      $("button", { type: "submit" }, "Обновить заметку")
    );
  }
  
  renderAddForm() {
    return $("form", { className: "add-form",
        onsubmit: (e) => {
          e.preventDefault();
          const form = e.target;
          const title = form.elements["title"].value;
          const description = form.elements["description"].value;
          this.controller.add(title, description);
        }
      }, 
      $("label", {}, 
        "Название",
        $("input", { type: "text", name: "title" }),
      ),
      $("label", {}, 
        "Описание",
        $("textarea", { name: "description"  }),
      ),
      $("button", { type: "submit" }, "Занести в заметки")
    );
  }
  renderToolBar() {
    return $("div", { className: "toolbar" }, 
      $("div", { className: "filter-container" }, 
        $("input", { checked: this.controller.includeArchive, type: "checkbox",
          onchange: () => this.controller.toggleIncludeArchive()
        }),
        $("span", {}, "Показать архивные заметки")
      ),
      $("div", { className: "filter-container" }, 
        $("input", { checked: this.controller.includeActive, type: "checkbox",
          onchange: () => this.controller.toggleIncludeActive()
        }),
        $("span", {}, "Показать активные заметки")
      ),
    );
  }
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
        }, "удалить"),
        $("button", { className: "to-do-item__delete", type: "button",
            onclick: () => this.controller.enterEditMode(item.id)
        }, "редактировать")
    );
  }
  
  renderList = list => {
    return $("ul", { className: "to-do-list", id: "to-do-list" },
        ...list.map(item => 
                    this.controller.editedItemId === item.id
                    ? this.renderEditForm(item)
                    : this.renderItem(item))
    );
  }

  render = list => {
    while (document.body.firstChild) {
      document.body.firstChild.remove();
    }
    
    document.body.append(this.renderAddForm(), this.renderToolBar(), this.renderList(list));
  }

  
}