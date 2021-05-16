window.addEventListener("load", () => {
  const button = $("div", { 
    className: "button",
    onclick: () => {
      block.classList.toggle("block_hidden");
    }
  });
  
  const block = $("div", { className: "block" });
  
  document.body.append(button, block, $("div", {}, "asdfs"));
});