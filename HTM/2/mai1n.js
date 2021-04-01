window.addEventListener("load", () => {
  const block = $("div", { className: "block"});

  const button = $("div", { 
    className: "button",
    onclick: start(block)
  });

  document.body.append(button, block);

  start(block) ();
});


let timerId = null;
let start = (block) => () => {
  if (timerId === null) {
    timerId = setInterval(changeColor(block), 800);
  } else {
    clearInterval(timerId);
    timerId = null;
  }
}


// let color = "red";
const changeColor = (block) => () => {
  // color = color === "red" ? "blue": "red";
  block.style.backgroundColor = "hsl(" + randomInt(0, 361) + "," + randomInt(0, 101) + "%," + randomInt(0, 101) + "%)";
}