var canvas;
var started = false;

var attractor;
var particles = [];

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {

  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');

  var a = 1.25;

  var b = 1.25;

  for (var i = 0; i < 100; i++) {
    particles.push(new Particle((windowWidth * 0.75)), ((windowHeight * 0.75)));
  }
  attractor = createVector(((a) * (windowWidth / 2), (b) * (windowHeight / 2)));
  background(300, 300, 300);
}


function draw() {
  stroke(300);
  strokeWeight(0);
  point(attractor.x, attractor.y);

  for (var i = 0; i < 50; i++) {

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

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.lifespan--;
  }

  this.show = function() {
    stroke(200, this.lifespan);
    strokeWeight(1);
    point(this.pos.x, this.pos.y);
  }
  this.attracted = function(target) {
    var force = p5.Vector.sub(target, this.pos);
    var dsquared = force.magSq();
    dsquared = constrain(dsquared, 50, 400);
    var G = 50;
    var strength = G / dsquared;
    force.setMag(strength);
    this.acc = force;
  }
}