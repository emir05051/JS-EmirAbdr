window.addEventListener("load", () => {

  const canvas = $("canvas", {
    width: window.innerWidth,
    height: window.innerHeight,
    "id":"canvas",
  });

  document.body.append(canvas);

  const game = new Game(canvas);
  game.start();
});