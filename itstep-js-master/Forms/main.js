window.addEventListener("load", () => {
  let input = document.forms['calc'].elements['expression'];

  let div = document.getElementById("result");

  input.addEventListener("input", () => {
    const value = input.value;

    // magic

    div.innerHTML = "ответ";

  });

});


window.addEventListener("load2", () => {
  const form = $("form", {
    name: "myform"
  },
    $("input", { type: "text", name: "field-1" }),
    $("input", { type: "date", name: "field-date" }),
    $("input", { type: "checkbox", name: "field-2" }),
    "text",
    $("div", {}, "div"),
    $("input", { type: "radio", name: "field-3", value: "v1" }),
    $("input", { type: "radio", name: "field-3", value: "v2" }),
    $("select", { name: "field-4" },
      $("option", { value: "sv1" }, "op1"),
      $("option", { value: "sv2" }, "op2")
    ),

    $("button", { name: "submit", type: "submit"}, "Отправить")
  );


  document.body.append(form);

  console.log([form]);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const checkbox = form.elements["field-2"];

    if (checkbox.checked) {
      console.log("Отправляем");
    } else {
      console.log("НЕ Отправляем");
    }

    console.log(form.elements["field-3"]);
    console.log(form.elements["field-3"].value);


    console.log(form.elements["field-4"].value);
    console.log(form.elements["field-4"].selectedIndex);

    console.log(form.elements["field-date"].value);


    const data = new FormData(form);

    console.log(Array.from(data.values()));

    // console.log(form.elements["field-3"].value);

  });


  const text = form.elements["field-1"];

  text.addEventListener("change", (event) => {
    console.log(event);
    console.log(text.value);
  });

  text.addEventListener("input", (event) => {
    console.log(event);
    console.log(text.value);
  });

  // form.elements["submit"].addEventListener("click", (event) => {
  //   console.log("Нажали");
  // });

});

window.addEventListener("load", () => {
  const form = document.forms["size-form"];
  form.addEventListener("submit", e => e.preventDefault());

  const fieldWidth = form.elements["width"];
  const fieldHeight = form.elements["height"];
  const fieldIsSquare = form.elements["isSquare"];
  const fieldColor   = form.elements["color"];

  const div = document.getElementById("bar");

  const shape = {
    hasErrors: false,
    isSquare: true,
    width: 100,
    height: 100,
    color: "yellow"
  };

  fieldWidth.value = shape.width;
  fieldHeight.value = shape.height;
  fieldColor.value = shape.color;
  fieldIsSquare.checked = shape.isSquare;
  if (shape.isSquare) {
    fieldHeight.disabled = true;
  }


  const updateDiv = () => {
    div.style.width = shape.width + "px";
    div.style.height = shape.height + "px";
    div.style.backgroundColor = shape.hasErrors ? "red" :  shape.color;
  };

  updateDiv();

  fieldWidth.addEventListener("input", () => {
    const width = parseInt(fieldWidth.value);

    if (isNaN(width) || String(width) !== fieldWidth.value) {
      if (isNaN(width)) {
        shape.hasErrors = true;
        fieldWidth.value = "";
      } else {
        fieldWidth.value = shape.width;
      }
    } else {
      shape.width = width;
      shape.hasErrors = false;

      if (shape.isSquare) {
        shape.height = width;
        fieldHeight.value = shape.height;
      }

    }
    updateDiv();
  });

  fieldHeight.addEventListener("input", () => {
    const height = parseInt(fieldHeight.value);

    if (isNaN(height) || String(height) !== fieldHeight.value) {
      if (isNaN(width)) {
        shape.hasErrors = true;
        fieldWidth.value = "";
      } else {
        fieldWidth.value = shape.width;
      }
    } else {
      shape.hasErrors = false;
      shape.height = height;
    }

    updateDiv();
  });


  fieldIsSquare.addEventListener("change", (e) => {
    console.log(e);

    shape.isSquare = fieldIsSquare.checked;

    if (shape.isSquare) {
      // fieldHeight.style.display = "none";
      fieldHeight.disabled = true;
      shape.height = shape.width;
      fieldHeight.value = shape.height;
    } else {
      // fieldHeight.style.display = "inline";
      fieldHeight.disabled = false;
    }

    updateDiv();
  });


  fieldColor.addEventListener("change", () => {
    console.log(fieldColor.value);
    if (fieldColor.value) {
      shape.color = fieldColor.value;
      shape.hasErrors = false;
    } else {
      shape.hasErrors = true;
    }

    updateDiv();  
  });


});


// password
// email
// url
// hashtag
// phone
// номер авто


const re = /asdf/
