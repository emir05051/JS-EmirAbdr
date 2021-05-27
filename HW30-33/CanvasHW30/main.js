const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
  context.beginPath();
  context.fillStyle = "black";
  for(let i = 100; i < 200; i += 10){
    context.fillRect(10, i, 10, 10);
  }
  for(let i = 130; i < 200; i += 10){
    context.fillRect(20, i, 10, 10);
  }
  for(let i = 140; i < 210; i += 10){
    context.fillRect(30, i, 10, 10);
  }
  for(let i = 150; i < 220; i += 10){
    context.fillRect(40, i, 10, 10);
  }
  for(let i = 150; i < 220; i += 10){
    context.fillRect(50, i, 10, 10);
  }
  for(let i = 140; i < 270; i += 10){
    context.fillRect(60, i, 10, 10);
  }
  for(let i = 130; i < 260; i += 10){
    context.fillRect(70, i, 10, 10);
  }
  context.fillRect(70, 270, 10, 10);
  context.fillRect(60, 270, 10, 10);
  for(let i = 120; i < 250; i += 10){
    context.fillRect(80, i, 10, 10);
  }
  for(let i = 110; i < 240; i += 10){
    context.fillRect(90, i, 10, 10);
  }
  for(let i = 50; i < 250; i += 10){
    context.fillRect(100, i, 10, 10);
  }
  for(let i = 40; i < 280; i += 10){
    context.fillRect(110, i, 10, 10);
  }
  for(let i = 40; i < 230; i += 10){
    context.fillRect(120, i, 10, 10);
  }
  context.fillRect(120, 270, 10, 10);

  context.fillStyle = "white";
  context.fillRect(120, 50, 10, 10);
  context.fillStyle = "black";
  for(let i = 40; i < 220; i += 10){
    context.fillRect(130, i, 10, 10);
  }
  for(let i = 40; i < 210; i += 10){
    context.fillRect(140, i, 10, 10);
  }
  for(let i = 40; i < 200; i += 10){
    context.fillRect(150, i, 10, 10);
  }
  for(let j = 160; j < 210; j += 10){
    for(let i = 40; i < 120; i += 10){
      context.fillRect(j, i, 10, 10);
    }
  }
  context.fillStyle = "white";
    for(let i = 170; i < 210; i += 10){
      context.fillRect(i, 100, 10, 10);
    }
  context.fillRect(200, 40, 10, 10);
  context.fillRect(200, 110, 10, 10);
  context.fillRect(190, 110, 10, 10);




  let img = new Image();
  img.src = canvas.toDataURL();
 console.log(img.src)
