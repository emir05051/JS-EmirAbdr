window.addEventListener("load", () => {
  let counter = 0;
  
  const button = $("div", {
    className: "button",
    onclick: () => {
      list.append(createListItem(++counter));
      resetIndexes(list);
    }
  });

  const list = $("div", { 
    className: "list",
    // Вараинт 2: Удаление при нажатии на список в целом 
    // onclick: (event) => {
    //   const target = event.target;
    //   // Сам список
    //   // Один из пунктов или его дети
  
    //   let item = null;
      
    //   if (target.className === "list__item") {
    //     item = target;
    //   } else if (target.parentElement.className === "list__item") {
    //     item = target.parentElement;
    //   }

    //   console.log(target, item);

    //   if (item !== null) {
    //     item.remove();
    //     resetIndexes(list); 
    //   }
        
    // }
  
  });

  document.body.append(button, list);

});

const createListItem = (content) => 
  $("div", {
      className: "list__item",
      // Вараинт 1: Удаление при нажатии на пункт списка в любом месте
      // onclick: (event) => {
      //   const list = event.currentTarget.parentElement; // list
      //   event.currentTarget.remove();
      //   resetIndexes(list); 
      // }
    }, 
    $("span"), // Порядоковый номер
    $("span", {}, " ID" + content), // ID
    $("span", {
      // Вараинт 3: Удаление при нажатии на кнопку удалить внутри пункт списка
      onclick: (event) => {
        const item = event.currentTarget.parentElement;
        const list = item.parentElement; // list
        item.remove();
        resetIndexes(list); 
      }
    }, "Удалить") 
  );


const resetIndexes = (list) => {
  Array.from(list.children).forEach((item, index) => {
    item.children[0].innerText = (index + 1);
  });
}

