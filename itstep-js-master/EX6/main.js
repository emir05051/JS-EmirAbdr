
window.addEventListener("load", () => {

  block = $("div", {
    className: "block"
  });

  document.body.append(block);

  window.addEventListener("mousemove", (event) => {
    block.style.transform = "rotateX(" + (-event.pageY) + "deg) rotateY(" + event.pageX +"deg)";
  });

});




