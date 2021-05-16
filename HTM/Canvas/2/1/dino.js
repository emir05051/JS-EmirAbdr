
class Dino {
  shape;
  position;

  v;

  // vx = 10;
  // vy = 0;

  g;
  jumpAcceleration;
  // vy0 = 100;

  constructor({ r, vx, g , vy0 }) {
    this.position = [0, 0];
    this.shape = circle(0, 0 + r, r);
    this.v = vector(vx, 0);
    this.g = vector(0, -g);
    this.jumpAcceleration = vector(0, vy0);
  }

  jump() {
    if (this.position[1] === 0) {
      this.v = add(this.v, this.jumpAcceleration);
    }
  }

  step(dt) {
    this.v = add(this.v, scale(this.g, dt));
    this.position = add(this.position, scale(this.v, dt));

    // Столкновение с землей
    if (this.position[1] <= 0) {
      this.v = vector(this.v[0], 0);
      this.position = vector(this.position[0], 0);
    }

    let r = this.shape.r;
    this.shape = circle(this.position[0], this.position[1] + r, r);
  }

}


renderDino = (context) => (dino) => {
  context.beginPath();
  context.arc(0, 0, dino.shape.r, 0, Math.PI * 2);
  context.stroke();
}