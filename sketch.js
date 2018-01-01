let b, cam;
let boxes = []

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  for (let i = 0; i < 250; i++) {
    let b = new Box(random(-5000, 5000), random(-5000, 5000), random(-5000,
      5000), 20);
    boxes.push(b);
  }

  cam = new Cam(0, 0, 0);
}

function draw() {
  cam.update();
  cam.show();
  for (b of boxes) {
    b.draw();
  }


}
