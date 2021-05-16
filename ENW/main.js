const linkRe = /\[([^\]<>]*)\]\(([^()<>]*)\)/g;
const empRe = /([*_]{1,3})([^*_<>]+)\1/g;


window.addEventListener("load", () => {
  const form = document.forms["markdown"];

  const input = form.elements["source"];

  const div = document.getElementById("result");

  // [Название](http://google.com) => <a href="$2">$1</a>
  // ***фыва sadf ывф*** => <b>$1</b>

  form.addEventListener("submit", ev => {
    ev.preventDefault();

    const source = input.value;
    
    let result = source;

    result = result.replace(linkRe, "<a href=\"$2\" target=\"_blank\">$1</a>");
    result = result.replace(empRe, (_, type, pharse) => {
      switch (type.length) {
        case 1: return "<i>" + pharse + "</i>";
        case 2: return "<b>" + pharse + "</b>";
        case 3: return "<b><i>" + pharse + "</i></b>";
      }
    });

    console.log(result);

    div.innerHTML = result;
  })


});