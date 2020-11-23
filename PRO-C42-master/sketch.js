var hr;
var mn;
var sc;

function setup() {
  createCanvas(400,400);
  hr = hour();
  mn = minute();
  sc = second();
}

function draw() {
  background(0);  

  translate(200,200);
  rotate(-90);
  angleMode(DEGREES);
  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 12, 0, 360);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  strokeWeight(10);
  stroke(255,0,0);
  noFill();
  arc(0,0,270,270, 0, scAngle);
  strokeWeight(10);
  stroke(0,255,0);
  noFill();
  arc(0,0,290,290, 0, mnAngle);
  strokeWeight(10);
  stroke(0,0,255);
  noFill();
  arc(0,0,310,310, 0, hrAngle);
  drawSprites();
}