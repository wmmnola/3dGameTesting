let lim = 1000;

let Box = function(x, y, z, boxsize, index) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.index = index;
  this.pos = createVector(this.x, this.y, this.z)
  this.vel = createVector(0, 0, 0);
  this.size = boxsize;
  this.dist = 0;
  this.draw = function() {
    push();
    translate(this.pos.x, this.pos.y, this.pos.z);
    box(this.size);
    pop();
  }
  this.update = function() {
    this.dist = dist(this.pos.x, this.pos.y, this.pos.z, cam.pos.x, cam.pos
      .y, cam.pos.z);
    if (this.dist > 10000) {
      //boxes.splice(this.index);
    }
  }

}
