let Cam = function(x, y, z, radius) {
  this.pos = createVector(x, y, z);
  this.acc = createVector(0, 0, 0);
  this.vel = createVector(0, 0, 0);
  this.Xangle = 0;
  this.Yangle = 0;
  this.diff = 0;
  this.r = radius;
  this.show = function() {
    rotateY(this.Xangle);
    camera(this.pos.x, this.pos.y, this.pos.z, 0, 0, 0, 1, 0, 0);
  }
  this.update = function() {

    this.acc.mult(.9);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    if (keyIsDown(87)) {
      let v = createVector(0, 0, -.1);
      //v = matrixMultiplication(yRotationMatrix(this.Xangle), v);
      cam.addAcceleration(v);
    }
    if (keyIsDown(65)) {
      this.turn(false);
    }
    if (keyIsDown(68)) {
      this.turn(true);
    }
  }
  this.addAcceleration = function(acc) {
    this.acc.add(acc);
  }
  this.turn = function(d) {
    let oldAngle = this.Xangle;
    if (!d) {
      this.Xangle -= .01;
      this.diff = oldAngle - this.Xangle;
    }
    if (d) {

    }



    this.acc = matrixMultiplication(yRotationMatrix(this.diff), this.acc);
    this.pos = matrixMultiplication(yRotationMatrix(this.diff), this.pos);
    this.vel = matrixMultiplication(yRotationMatrix(this.diff), this.vel);

  }

}

function xRotationMatrix(theta) {
  m = [
    [1, 0, 0],
    [0, cos(theta), -1 * sin(theta)],
    [0, sin(theta), cos(theta)]
  ];
  return m;
}

function yRotationMatrix(theta) {
  m = [
    [cos(theta), 0, sin(theta)],
    [0, 1, 0],
    [-sin(theta), 0, cos(theta)]
  ];
  return m;
}

function matrixMultiplication(matrix, vector) {
  let vec = [];
  for (row of matrix) {
    vec.push((row[0] * vector.x) + (row[1] * vector.y) + (row[2] * vector.z))
  }
  return createVector(vec[0], vec[1], vec[2]);
}
