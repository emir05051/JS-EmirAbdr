
/**
 * 
 * @param {*} tag 
 * @param {*} attributes 
 * @param  {...any} children 
 * @returns {HTMLElement}
 */
const e = (tag, attributes = {}, ...children) => {
  const element = document.createElement(tag);

  Object.entries(attributes)
    .forEach(([key, value]) => {
      if (key === "style") {
        Object.entries(value).forEach(([cssKey, cssValue]) => {
          element.style[cssKey] = cssValue;
        });
      } else {
        element[key] = value;
      }

    });

  element.append(...children);

  return element;
}


window.addEventListener("DOMContentLoaded", (event) => {
  console.log([document.body]);

  // Скорость страдает
  // Неудобно
  // Невозсожно нормально добавить обработчики событий
  // document.body.innerHTML = "<a href='sdf'>asdfsadf</a>";

  const a = e("a", { 
      id: "mylink",
      className: "link link_red",
      // href: "http://google.com",
      // style: {
      //   backgroundColor: "#00ff00"
      // }
    },
    "Add something",
  );

  const ul = e("ul", {
    style: {
      border: "1px solid red"
    }
  });

  document.body.append(a, ul);

  let index = 0;
  a.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(event);

    a.classList.toggle("link_red");
    a.classList.toggle("link_green");

    ul.append(e("li", {}, "Пункт " + ++index));
  });


  
  // div.style.backgroundColor = "#00ff00";

  
  // const a = document.createElement("a");
  // a.innerText = "Link";
  // a.href = "http://google.com";

  // a.id = "mylink";
  // a.className = "link link_red";

  // console.log(a.classList);

  // a.classList.remove("link_red");
  // a.classList.add("link_green");
  // a.classList.toggle("link_green");
  // a.classList.toggle("link_red");

  // if( a.classList.contains("link_red")) {
  //   a.classList.remove("link_red");
  // } else {
  //   a.classList.add("link_red");
    
  // }
  
  // console.log(a.classList.contains("link_red"));

  // document.body.append(a);


  // const span = document.createElement("span");
  // span.innerText = "SPAN";
  // a.append(span);


  // const span2 = document.createElement("span");
  // span2.innerText = "SPAN2";

  // document.body.insertBefore(span2, null);


  // // document.body.removeChild(span2);

  // console.log([a]);


  // const img = document.createElement("img");
  // img.src = "https://i2.wp.com/msoffice-prowork.com/wp-content/uploads/2019/04/microsoft-surface-book-2-technastic-02_1920px-x-1080px.jpg?fit=1920%2C1080&ssl=1";

  // document.body.append(img);
  // console.log(img.width, img.height);

  // img.addEventListener("load", (e) => {
  //   console.log("Загрузилась", e);
  //   console.log(img.width, img.height);
  // });




});