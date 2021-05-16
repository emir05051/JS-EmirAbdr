window.addEventListener("load", () => {
  const form = document.forms["test"];

  Array.from(form.elements).map(createField(form));

  const config = {
    "name": required,
    "about": identity
  }

  const showFailure = input => state => {
    console.log(state, [input]);
    input.nextSibling.innerHTML = "Ошибка";
  }
  const showSuccess = input => state => {
    console.log(state, [input]);
    input.nextSibling.innerHTML = "";
  }

  form.addEventListener("input", ev => {
    const { target } = ev; 
    const { name } = target;

    if (name in config) {
      State.switch
        (showFailure(target))
        (showSuccess(target))
        (validate (config[name]) (target.value));
    }
  });




  form.addEventListener("change", ev => {
    console.log(ev);
  });

  form.addEventListener("submit", ev => {
    ev.preventDefault();
  });

});


const createField = form => input => {

  if (input.tagName === "BUTTON") {
    return;
  }

  const field = $("label", {
    className: "field"
  });
  
  form.insertBefore(field, input);
  
  field.append(
    $("div", { className: "label" }, input.dataset.label),
    input,
    $("div", { className: "errors" })
  );
}