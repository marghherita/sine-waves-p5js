function setup() {
    const canvas = createCanvas(600, 600)

    s1 = createSlider(1, 100, 50, 10).position(100, 660);
    p1 = createP("Number of elements"). position(85, 620);
    s2 = createSlider(50, 200, 100, 10).position(360, 660);
    p2 = createP("Speed"). position(400, 620);


    angleMode(DEGREES)
    rectMode(CENTER)


    // if (stop) noLoop();
    // canvas.mousePressed(function () {
    //     stop = !stop;
    //     stop ? noLoop() : loop()
    // })

}

function draw() {


    // if (frameCount === 1) {
    //     capturer.start()

    //   }


    background(10, 20, 30)
    noFill()
    stroke(255)

    translate(width / 2, height / 2)


    for (let i = 0; i < s1.value() ; i++) {
        push()
        

        rotate(sin(frameCount + i) * s2.value())

        let r = map(sin(frameCount), -1, 1, 100, 200);
        let g = map(cos(frameCount/2), 0, 50, 100, 200);
        let b = map(cos(frameCount/4), -1, 1, 200, 100);

        stroke(r, g, b)


        rect(0, 0, 300 - i * 1.5, 300 - i * 1.5, 120 - i)

        pop()

    }


    // if (frameCount < 60 * 8) {
    //     capturer.capture(canvas)
    //   } else if (frameCount === 60 * 8) {
    //     capturer.save()
    //     capturer.stop()
    //   }


    // rect(0, 0, 200, 200)

}