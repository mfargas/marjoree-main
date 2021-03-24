var canvas;
var started = false;

var attractor;
var particles = [];

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');

  var a = 1.25;

  var b = 1.25;

  for (var i = 0; i < 40; i++) {
    particles.push(new Particle((windowWidth / 4), (windowHeight * 1 / 4)));
  }
  attractor = createVector(((a) * 400), ((b) * 400));
  background(300, 300, 300);
}


function draw() {
  stroke(20);
  strokeWeight(0);
  point(attractor.x, attractor.y);

  for (var i = 0; i < 40; i++) {

    var particle = particles[i];
    particle.attracted(attractor);
    particle.update();
    particle.show();
  }

}


function Particle(x, y) {
  this.pos = createVector(x, y);
  this.vel = p5.Vector.random2D();
  this.acc = createVector();
  this.lifespan = 2250.0;

  this.update = function () {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.lifespan--;
  }

  this.show = function () {
    stroke(200, this.lifespan);
    strokeWeight(1);
    point(this.pos.x, this.pos.y);
  }

  this.attracted = function (target) {
    var force = p5.Vector.sub(target, this.pos);
    var dsquared = force.magSq();

    dsquared = constrain(dsquared, 50, 400);
    var G = 30;
    var strength = G / dsquared;
    force.setMag(strength);
    this.acc = force;
  }
}