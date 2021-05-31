const h = Math.sqrt(3) / 2;
const a120 = 2 * Math.PI / 3;


const drawSide = context => {
  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(-h, -0.5);
  context.lineTo(0, -1);
  context.lineTo(h, -0.5);
  context.closePath();
}

const drawCube = context => {
  
  context.save();

  ["#89cac4", "#36538d", "#faffc7"].forEach(color => {
    drawSide(context);
    context.fillStyle = color;
    context.fill();
    context.rotate(a120);
  });
  
  context.restore();
}


window.addEventListener("load", () => {
  const scale = 50;

  const xn = 10; //Math.ceil(width / scale / (2 * h));
  const yn = 2; //Math.ceil(height / scale / 1.5);

  const width = scale * 2 * h * xn;
  const height = scale * 1.5 * yn;


  let canvas = $("canvas", {
    width,
    height,
  });

  document.body.append(canvas);

  let context = canvas.getContext("2d");

  context.save();
  context.scale(scale, scale);

  for (let x = 0; x <= xn; x++) {
    for (let y = 0; y <= yn; y++) {
      context.save();
      context.translate(
        h * 2 * x + (y % 2 === 1 ? h : 0), 
        1.5 * y
      );
      drawCube(context);
      context.restore();
    }
  }

  context.restore();

});




