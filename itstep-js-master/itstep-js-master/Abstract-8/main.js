// DOM - Document Object Model

// console.log(window); //Окно
// console.log([document]); //Документ = HTML
// console.log([document.body]); //<body>

// console.log(document); //Документ = HTML


console.log("before");


// Срабатывает как только браузер подгодовил DOM т.е. прочитал весь HTML документ
window.addEventListener("DOMContentLoaded", (event) => {
  console.log(event);
  console.log([document.body]);


  console.log([document.body.children[0].children[0].innerText]);
  // document.body.children[0].children[0].innerText = "<a href=''>Новое</a>";
  console.log([document.body.children[0].children[1].innerHTML]);
  // document.body.children[0].children[1].innerHTML = "<a href=''>Новое</a>";

  console.log([document.getElementById("myid")]);
  console.log(document.getElementsByTagName("div"));
  console.log(document.getElementsByClassName("b"));

  console.log(Array.from(document.getElementsByClassName("b")).map(element => element.innerHTML));

  console.log(document.querySelectorAll(".b span"));

  const div = document.getElementById("myid");
  console.log(div.querySelectorAll(".b span"));

});

// Cрабатывает как только загружено ВСЕ содержимое документа
// только аттрибуты src
window.addEventListener("load", (event) => {
  console.log(event);
  console.log([document.body]);
});



console.log("after");


