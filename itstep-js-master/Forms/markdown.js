const linkRe = /\[([^\]<>]*)\]\(([^()<>]*)\)/g;
const empRe = /([*_]{1,3})([^*_<>]+)\1/g;
const hRe = /^(#{1,6})\s*([^#<>]+?)\s*$/gm;
const brRe = /^\s*[\r\n]/gm;
const hrRe = /^-{3,}$/gm

const liRe = /^( *)- (.+?)$/gm;
const ulRe = /(^ *- .+?$\n?)+/gm;


const mimeRe = /^image/;


window.addEventListener("load", () => {
  const form = document.forms["markdown"];

  const input = form.elements["source"];

  const img = document.getElementById("result");

  // [Название](http://google.com) => <a href="$2">$1</a>
  // ***фыва sadf ывф*** => <b>$2</b>
  // ^###### SADFSADF $ => <hN>$2</hN>
  //  => <br/>

  img.addEventListener("load", () => {
    console.log("OK");
  });

  img.addEventListener("error", () => {
    console.log("Error");
  });

  input.addEventListener("change", ev => {
    // console.log([input]);

    const file = input.files[0];

    if (!file) {
      return;
    }

    // if (!mimeRe.test(file.type)) {
    //   return;
    // }

    console.log(file.type);

    const reader = new FileReader();
    
    reader.onload = (e) => {
      
      img.src = reader.result;


      console.log(reader.result);
      // div.innerHTML = parse(reader.result);
    }

    reader.onerror = (e) => {
      console.log(e);
    }

    reader.readAsDataURL(file);

    // div.innerHTML = result;

  });


});


const parse = (source) => {
  
    
  let result = source;

  result = result.replace(linkRe, "<a href=\"$2\" target=\"_blank\">$1</a>");
  result = result.replace(empRe, (_, type, pharse) => {
    switch (type.length) {
      case 1: return "<i>" + pharse + "</i>";
      case 2: return "<b>" + pharse + "</b>";
      case 3: return "<b><i>" + pharse + "</i></b>";
    }
  });

  result = result.replace(hRe, (_, type, pharse) => {
    const h = "h" + type.length;
    return "<" + h + ">" + pharse + "</" + h + ">";
  });

  result = result.replace(brRe, "<br/>\n");
  
  result = result.replace(hrRe, "<hr/>\n");

  result = result.replace(ulRe, (m) => {
    const matches = Array.from(m.matchAll(liRe));
    console.log(matches);
    
    // Для каждого пункта: 
    // считаем количество пробелов вначале
    // если равно предыдущему - то добавляем в текущий список
    // если меньше - то возврщаемся на один уровень назад
    // если больше - то создаем новый вложенный список 
    
    const items = m.replace(liRe, "<li>$2</li>");
    return "<ul>" + items + "</ul>";
  })

  console.log(result);

  return result;
}