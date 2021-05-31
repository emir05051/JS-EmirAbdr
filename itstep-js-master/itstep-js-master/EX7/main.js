const createRect = (context) => (number) => {

  // 0 0 24 24  -  1 1 22 22
  // 3 3 18 18  -  4 4 16 16
  // 6 6 12 12  -  7 7  10 10
  // 9 9 6 6    -  10 10 4 4


  for (let i = 0; i < number; i++) { 
    const x = i * 2.5;
    const w = ((number - 1 - i) * 2.5 + 2) * 2;
    context.fillStyle = "black";
    context.fillRect(x, x, w + 2, w + 2);

    context.fillStyle = "white";
    context.fillRect(x + 1, x + 1, w, w);
  }

}


window.addEventListener("load", () => {

  let canvas = $("canvas", {
    width: 800,
    height: 800,
  });

  document.body.append(canvas);

  let context = canvas.getContext("2d");

  context.save();

  context.scale(8, 8);

  const number = 4;

  const size = ((number - 1) * 2.5 + 2) * 2 + 1;

  for (let x = 0; x < 4; x++) {
    for (let y = 0; y < 4; y++) {
      context.save();
      context.translate(x * size, y * size);
      createRect(context)(number);
      context.restore();
    }
  }
  context.restore();


});




