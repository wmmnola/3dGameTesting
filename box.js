let lim = 1000;

let Box = function(x, y, z, boxsize) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.pos = createVector(this.x, this.y, this.z)
  this.vel = createVector(0, 0, 0);
  this.size = boxsize;
  this.draw = function() {
    push();
    translate(this.pos.x, this.pos.y, this.pos.z);
    box(this.size);
    pop();
  }
  this.update = function() {}

}
