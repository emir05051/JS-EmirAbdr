window.addEventListener("load", () => {
  const canvas = document.getElementById("canvas");

  const context = canvas.getContext("2d");


  // context.beginPath();
  
  context.translate(500, 500);

  const R = 300;
  const n = 12;
  const a = 2 * Math.PI / n;
  const th = Math.sqrt(3) / 2;
  const tr = Math.sqrt(3) / 3;


  context.beginPath();
  context.arc(0, 0, R, 0, 2 * Math.PI);
  context.strokeStyle = "grey";
  context.stroke();


  // 0 1 2 3 4  5  6  7  8
  // 0 1 2 3 4  3  2  1  0
  // 0 1 2 3 4 -2 -4 -6 -8

  for (let i = 0; i < n; i++) {
    context.save();
    const angle = i * a + Math.PI; 
    const scale = 10 * (i % (n/2)  + 5);

    context.rotate(angle);
    context.translate(0, R);


    // Circle
    context.save();
    context.rotate(-angle);
    context.rotate(i * Math.PI * 2 / 3)
    context.scale(scale, scale);
    context.translate(0, -tr);

    context.beginPath();
    context.arc(0, 0, 0.15, 0, 2 * Math.PI);
    
    context.restore();
    context.fillStyle = "red"
    context.fill();

    // Triangle
    context.save();
    context.rotate(-angle);
    context.scale(scale, scale);
    context.translate(0, -tr);

    context.beginPath();
    context.moveTo( 0  , 0  );
    context.lineTo( 0.5, th );
    context.lineTo(-0.5, th );
    context.lineTo( 0  , 0  );

    context.restore();
    context.fillStyle = "black";
    context.fill();


    // Rect
    context.save();

    context.scale(30, 10);
    context.translate(-0.5, -0.5);
    context.beginPath();
    context.rect(0, 0, 0.5, 1);

    context.restore();
    context.fillStyle = "red"
    context.fill();

    // Elipse
    context.save();

    context.scale(10, 3 * 10);
    context.beginPath();
    context.arc(0, 0, 0.5, 0, 2 * Math.PI);

    context.restore();
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.stroke();

    // Rect
    context.save();

    context.scale(30, 10);
    context.translate(0, -0.5);
    context.beginPath();
    context.rect(0, 0, 0.5, 1);

    context.restore();
    context.fillStyle = "red"
    context.fill();



    context.restore();
  }




  
  

});