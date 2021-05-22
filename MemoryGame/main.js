window.addEventListener("load", () => {
    document.getElementById("button-start").addEventListener("click", ()=> {
      const n = document.getElementById("N").value
      const m = document.getElementById("M").value
      createUi(n, m);
    })
  });