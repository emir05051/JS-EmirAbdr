
let container = null;

window.addEventListener("load", () => {

  container = $("div", {
    className: "container"
  });
  document.body.append(container);

  fillWithBlocks(container);
});

window.addEventListener("resize", () => {
  fillWithBlocks(container);
});


let ID = 0;
const fillWithBlocks = (container) => {
  const blockWidth = 150;
  const [containerWidth] = getContentBox(container);

  const n = Math.floor(containerWidth / blockWidth);

  while (container.children.length > n) {
    container.removeChild(container.lastChild);
  }
  
  const blocks = createArray(() => $("div", { className: "block" }, ++ID)) (n - container.children.length);

  container.append(...blocks);
}



