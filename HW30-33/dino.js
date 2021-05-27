const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
context.beginPath();
context.fillStyle = "black";
for (let i = 100; i < 200; i += 10) {
  context.fillRect(10, i, 10, 10);
}
for (let i = 130; i < 200; i += 10) {
  context.fillRect(20, i, 10, 10);
}
for (let i = 140; i < 210; i += 10) {
  context.fillRect(30, i, 10, 10);
}
for (let i = 150; i < 220; i += 10) {
  context.fillRect(40, i, 10, 10);
}
for (let i = 150; i < 220; i += 10) {
  context.fillRect(50, i, 10, 10);
}
for (let i = 140; i < 270; i += 10) {
  context.fillRect(60, i, 10, 10);
}
for (let i = 130; i < 260; i += 10) {
  context.fillRect(70, i, 10, 10);
}
context.fillRect(70, 270, 10, 10);
context.fillRect(60, 270, 10, 10);
for (let i = 120; i < 250; i += 10) {
  context.fillRect(80, i, 10, 10);
}
for (let i = 110; i < 240; i += 10) {
  context.fillRect(90, i, 10, 10);
}
for (let i = 50; i < 250; i += 10) {
  context.fillRect(100, i, 10, 10);
}
for (let i = 40; i < 280; i += 10) {
  context.fillRect(110, i, 10, 10);
}
for (let i = 40; i < 230; i += 10) {
  context.fillRect(120, i, 10, 10);
}
context.fillRect(120, 270, 10, 10);

context.fillStyle = "white";
context.fillRect(120, 50, 10, 10);
context.fillStyle = "black";
for (let i = 40; i < 220; i += 10) {
  context.fillRect(130, i, 10, 10);
}
for (let i = 40; i < 210; i += 10) {
  context.fillRect(140, i, 10, 10);
}
for (let i = 40; i < 200; i += 10) {
  context.fillRect(150, i, 10, 10);
}
for (let j = 160; j < 210; j += 10) {
  for (let i = 40; i < 120; i += 10) {
    context.fillRect(j, i, 10, 10);
  }
}
context.fillStyle = "white";
for (let i = 170; i < 210; i += 10) {
  context.fillRect(i, 100, 10, 10);
}
context.fillRect(200, 40, 10, 10);
context.fillRect(200, 110, 10, 10);
context.fillRect(190, 110, 10, 10);




let img = new Image();
img.src = canvas.toDataURL();



class Dino {
  shape;
  position;

  v;

  // vx = 10;
  // vy = 0;

  g;
  jumpAcceleration;
  // vy0 = 100;

  sprite;
  spriteIsReady = false;
  spriteW;
  spriteH;

  constructor({ h, w, vx, g , vy0 }) {
    this.position = [0, 0];
    this.shape = rect(this.position, vector(w, h));
    this.v = vector(vx, 0);
    this.g = vector(0, -g);
    this.jumpAcceleration = vector(0, vy0);

    
    this.sprite = new Image();

    this.sprite.src = img.src;
    this.sprite.onload = (event) => {
      console.log(event);
      this.spriteIsReady = true;
      this.spriteW = this.sprite.width;
      this.spriteH = this.sprite.height;

      const h = this.shape.size[0] * this.spriteH / this.spriteW;

      this.shape = rect(this.shape.position, vector(this.shape.size[0], h));
    }

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

    // let r = this.shape.r;
    this.shape = rect(this.position, this.shape.size);
  }

}


/**
 * @param {CanvasRenderingContext2D} context
 */
renderDino = (context) => (dino) => {
  context.beginPath();

  // context.drawImage()
  // context.rect(
  //   -dino.shape.size[0] / 2, 0, 
  //   dino.shape.size[0], -dino.shape.size[1]
  // );

  if (dino.spriteIsReady) {
    context.drawImage(
      dino.sprite, 
      110, 100,
      dino.spriteW - 110 - 120,
      dino.spriteH - 100 - 100,
      -dino.shape.size[0] / 2, 
      -dino.shape.size[1], 
      dino.shape.size[0], 
      dino.shape.size[1]
  );
  }

  // context.arc(0, 0, dino.shape.r, 0, Math.PI * 2);
  context.stroke();
}