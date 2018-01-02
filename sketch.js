let b, cam;
let boxes = []
const boxCount = 500;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  for (let i = 0; i < 250; i++) {
    let b = new Box(random(-5000, 5000), random(-5000, 5000), random(-5000,
      5000), 20, i);
    boxes.push(b);
  }

  cam = new Cam(0, 0, 0);
}

function draw() {
  cam.update();
  cam.show();
  for (b of boxes) {
    b.update();
    b.draw();
  }
  if (boxes.length < boxCount) {
    console.log(boxes.length);
    for (let i = 0; i < (boxCount - boxes.length); i++) {
      //let b = new Box(cam.pos.x + random(-1000, 1000), cam.pos.y + random(-
      //1000, 1000), cam.pos.z + random(-1000, 1000), 20, boxes.length + 1);
      //console.log(b);
      //boxes.push(b);
    }
  }


}
