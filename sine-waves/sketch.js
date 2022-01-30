function setup() {

  const canvas = createCanvas(400, 400, WEBGL)
  angleMode(DEGREES)


  //   if (stop) noLoop();
  //   canvas.mousePressed(function () {
  //     stop = !stop;
  //     stop ? noLoop() : loop()
  // })


}

function draw() {


  if (frameCount === 1) {
    capturer.start()

  }

  background(30)

  rotateX(60)

  noFill()
  stroke(255)

  for (let i = 0; i < 90; i++) {


    let r = map(sin(frameCount), -1, 1, 100, 200);
    let g = map(i, 0, 50, 100, 200);
    let b = map(cos(frameCount), -1, 1, 200, 100)

    stroke(r, g, b)

    rotate(frameCount / 30)

    beginShape()
    for (let j = 0; j < 360; j += 10) {
      let rad = i * 1.5;
      let x = rad * cos(j);
      let y = rad * sin(j);
      let z = sin(frameCount * 2 + i * 3) * 50

      vertex(x, y, z)
    }
    endShape(CLOSE)
  }

  if (frameCount < 60 * 10) {
    capturer.capture(canvas)
  } else if (frameCount === 60 * 10) {
    capturer.save()
    capturer.stop()
  }
}




// const btn = document.querySelector('.btn');

// btn.addEventListener("click", () => {
//   console.log("test")
//   if (stop) noLoop();

//   stop = !stop;
//   stop ? noLoop() : loop()

// })