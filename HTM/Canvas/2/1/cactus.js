class Cactus {
  shape
  position

  constructor({ r, x }) {
    this.shape = circle(x, 0 + r, r);
    this.position = vector(x, 0);

  }
}

const spawnCactus = ({ rMin, rMax, dMin, dMax }) => (cactuses) => {
  const prevX = cactuses.length > 0 ? cactuses[cactuses.length - 1].shape.o[0] : 0;

  return new Cactus({
    r: randomInt(rMin, rMax),
    x: prevX + randomInt(dMin, dMax),
  });
}

const renderCactus = (context) => (cactus) => {
  context.beginPath();
  context.arc(0, 0, cactus.shape.r, 0, Math.PI * 2);
  context.stroke();
}